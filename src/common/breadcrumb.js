import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

const Breadcrumb = ({ home, parent_name, child_name }) => {
  return (
    <div>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='/'>
          {home}
        </Link>
        <Link underline='hover' color='inherit' href='/material-ui/getting-started/installation/'>
          {parent_name}
        </Link>
        <Typography color='text.primary'>{child_name}</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
