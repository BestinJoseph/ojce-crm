import React from 'react'
import classNames from 'classnames'

import useStyles from './Header'
import { Link } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <h2 className={classNames('title')}>OJCE CRM</h2>
      <List className={classNames('list')}>
        <ListItem><Link to="/company">Company</Link></ListItem>
        <ListItem><Link to="/opportunity">Opportunity</Link></ListItem>
      </List>
    </div>
  )
}

export default Header
