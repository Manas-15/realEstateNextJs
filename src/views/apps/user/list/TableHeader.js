// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const TableHeader = props => {
  // ** Props
  const { handleFilter, toggle, value } = props

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        display: 'flex',
        justifyContent: 'end',
        flexWrap: 'wrap',
        alignItems: 'center'
        // justifyContent: 'space-between'
      }}
    >
      {/* <Button
        sx={{ mr: 4, mb: 2 }}
        color='secondary'
        variant='outlined'
        startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
      >
        Export
      </Button> */}
      {/* <Box>
        Show
        <Select sx={{ mr: 4, mb: 2 }} color='secondary' variant='outlined' size='small' sx={{ mb: 2 }} renderValue={10}>
          <MenuItem value='10' selected>
            10
          </MenuItem>
          <MenuItem value='25'>25</MenuItem>
          <MenuItem value='50'>50</MenuItem>
          <MenuItem value='100'>100</MenuItem>
        </Select>
        entries
      </Box> */}

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 6, mb: 2 }}
          placeholder='Search User'
          onChange={e => handleFilter(e.target.value)}
        />

        {/* <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
          Add User
        </Button> */}
      </Box>
    </Box>
  )
}

export default TableHeader
