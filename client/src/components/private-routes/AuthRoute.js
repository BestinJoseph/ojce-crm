import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, ...rest}) => {
  const { users } = useSelector( state => state )

  return (
      <Route {...rest} render={ (props) => {
        return (
          users.isAuthenticated ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: { from: props.location }}} />
        )
      }} />
  )
}

export default AuthRoute