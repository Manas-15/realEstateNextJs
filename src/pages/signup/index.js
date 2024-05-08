// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { useRouter } from 'next/router'

// ** Styled Components
const RegisterIllustrationWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const RegisterIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

// const RightWrapper = styled(Box)(({ theme }) => ({
//   width: '100%',
//   [theme.breakpoints.up('md')]: {
//     maxWidth: 400
//   },
//   [theme.breakpoints.up('lg')]: {
//     maxWidth: 450
//   }
// }))

const RegisterMultiStepsIllustration = styled('img')({
  maxWidth: 200,
  height: 'auto',
  maxHeight: '100%'
})

const LeftWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12),
  [theme.breakpoints.up('lg')]: {
    maxWidth: 480
  },
  [theme.breakpoints.down(1285)]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 635
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12)
  }
}))

const WizardWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 700,
  margin: theme.spacing(0, 'auto'),
  [theme.breakpoints.up('md')]: {
    width: 700
  }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false)
  const [values, setValues] = useState({
    showPassword: false,
    showConfirmPassword: false
  })

  // ** Hooks
  const theme = useTheme()
  const router = useRouter()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings
  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }

  const handleCreate = () => {
    router.push('/apps/user/list/')
  }
  return (
    <>
      <Box className='content-right'>
        {!hidden ? (
          <LeftWrapper>
            <RegisterMultiStepsIllustration
              alt='register-multi-steps-illustration'
              src='/images/pages/auth-v2-register-multi-steps-illustration.png'
            />
          </LeftWrapper>
        ) : null}
        <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
          <WizardWrapper>
            <>
              <Box sx={{ mb: 4 }}>
                <Typography variant='h5'>User Registration</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Enter Your Details</Typography>
              </Box>

              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField label='Company Name' placeholder='Surya' size='small' />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField label='Full Name' placeholder='johndoe' size='small' />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField label='Designation' placeholder='Manager' size='small' />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField type='email' label='Email' placeholder='john.doe@email.com' size='small' />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField type='text' label='Mobile No.' placeholder='+91' size='small' />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='input-password'>Password</InputLabel>
                    <OutlinedInput
                      label='Password'
                      id='input-password'
                      size='small'
                      type={values.showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={e => e.preventDefault()}
                          >
                            <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor='input-confirm-password'>Confirm Password</InputLabel>
                    <OutlinedInput
                      label='Confirm Password'
                      id='input-confirm-password'
                      type={values.showConfirmPassword ? 'text' : 'password'}
                      size='small'
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={handleClickShowConfirmPassword}
                          >
                            <Icon icon={values.showConfirmPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <>
                    <FormControl sx={{ mb: 4, maxWidth: 200 }}>
                      <TextField autoFocus label='Captcha' placeholder='Enter Your Captcha' size='small' />
                      {/* <Controller
                        name='captcha'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                          <TextField
                            autoFocus
                            label='Captcha'
                            size='small'
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            placeholder='Enter Your Captcha'
                          />   )}*/}
                    </FormControl>
                    <FormControl sx={{ mb: 4, maxWidth: 140 }}>
                      <TextField
                        autoFocus
                        disabled
                        label=''
                        size='small'
                        value={2780}
                        placeholder='Enter Your Captcha'
                        style={{ fontWeight: 'bolder' }}
                        sx={{ backgroundColor: 'yellow', color: 'black' }}
                      />
                    </FormControl>
                  </>
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField fullWidth label='Profile Link' placeholder='johndoe/profile' />
                </Grid> */}
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    {/* <Button disabled variant='contained' startIcon={<Icon icon='mdi:chevron-left' fontSize={20} />}>
                      Previous
                    </Button> */}
                    <Button
                      variant='contained'
                      onClick={handleCreate}
                      endIcon={<Icon icon='mdi:chevron-right' fontSize={20} />}
                    >
                      Create Account
                    </Button>
                  </Box>
                  <Box
                    sx={{ mt: 3, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}
                  >
                    <Typography sx={{ mr: 2, color: 'text.secondary' }}>Already have an account?</Typography>
                    <Typography href='/login' component={Link} sx={{ color: 'primary.main', textDecoration: 'none' }}>
                      Sign In
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </>
          </WizardWrapper>
        </RightWrapper>
      </Box>
    </>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register
