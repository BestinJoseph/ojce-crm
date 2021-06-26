import React from 'react'
import { Box, TextField, Button, Typography } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import useStyles from './Login'
import { loginAction } from '../../../actions/authaction'

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const initialValues = { email: '', password: '' }

    const handleSubmit = (values, actions) => {
      dispatch(loginAction(values, history))
      actions.resetForm()
    }

    return (
      <Box className={classes.login}>
        <Box className={classNames('form')}>
          <Typography variant="h5" className={classNames('formTitle')}>Login</Typography>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <Field as={ TextField } label="Email" name="email" fullWidth className={classNames('textField')}/>
              <Field as={ TextField } label="Password" name="password" fullWidth className={classNames('textField')} type="password"/>
              <Button type="submit" variant="contained" color="primary" className={classNames('formButton')}>Login</Button>
            </Form>
          </Formik>
          <Typography variant="body1">if you already have an account, <Link to="/register">register</Link> here</Typography>
        </Box>
      </Box>
    )
}

export default Login
