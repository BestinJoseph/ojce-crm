import { Box, Grid } from '@material-ui/core'
import classNames from 'classnames'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useStyles from './opportunity'
import TableComponent from './TableComponent'
import { getAllOpportunityAction } from '../../../actions/opportunityaction'

const Opportunity = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { opportunities } = useSelector( state => state.opportunities )

  useEffect(() => {
    dispatch(getAllOpportunityAction())
  }, [dispatch])

  // console.log(opportunities)

  return (
    <Box className={classes.opportunity}>
      <Link to="/opportunity/create" className={ classNames('create') }>Create Opportunity</Link>
      <Grid container>
        <Grid item sm={9} style={{ paddingRight: '3rem' }}>
          <TableComponent opportunities={opportunities}/>
        </Grid>
        <Grid item sm={3}>
          Notification goes here....
        </Grid>
      </Grid>
    </Box>
  )
}

export default Opportunity
