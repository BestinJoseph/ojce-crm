import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './Header'
import { logoutAction } from '../../../actions/authaction'

const Header = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { users: { isAuthenticated } } = useSelector(state => state)

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  return (
    <div className={classes.header}>
      <h2 className={classNames('title')}>OJCE CRM</h2>
      <List className={classNames('list')}>
        <ListItem><Link to="/company">Company</Link></ListItem>
        <ListItem><Link to="/opportunity">Opportunity</Link></ListItem>
        { isAuthenticated ? <ListItem><Link to="" onClick={ () => handleLogout() }>Logout</Link></ListItem> : '' }
      </List>
    </div>
  )
}

export default Header
