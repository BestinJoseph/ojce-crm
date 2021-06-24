import { Box } from '@material-ui/core'
// import classNames from 'classnames'
import React from 'react'

import useStyles from './Dashboard'

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Box className={classes.dashboard}>
      Dashboard Page....
    </Box>
  )
}

export default Dashboard
