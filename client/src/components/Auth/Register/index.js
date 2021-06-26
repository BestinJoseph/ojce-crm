import React from 'react'
import { Box, TextField, MenuItem, Button, Typography } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import useStyles from './Register'
import { registerAction } from '../../../actions/authaction'

const Register = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const initialValues = { email: '', name: '', password: '', branch: '' }

    const handleSubmit = (values, actions) => {
      dispatch(registerAction(values, history))
      actions.resetForm()
    }

    return (
      <Box className={classes.register}>
        <Box className={classNames('form')}>
          <Typography variant="h5" className={classNames('formTitle')}>Register</Typography>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values }) => (
              <Form>
                <Field as={ TextField } label="Full Name" name="name" fullWidth className={classNames('textField')}/>
                <Field as={ TextField } label="Email" name="email" fullWidth className={classNames('textField')}/>
                <Field as={ TextField } label="Password" name="password" fullWidth className={classNames('textField')} type="password"/>
                <Field as={ TextField } select label="Branch" name="branch" fullWidth className={classNames('textField')}>
                  <MenuItem value="">Select Branch</MenuItem>
                  <MenuItem value="riyadh">Riyadh</MenuItem>
                  <MenuItem value="qassim">Qassim</MenuItem>
                  <MenuItem value="jeddah">Jeddah</MenuItem>
                  <MenuItem value="madinah">Madinah</MenuItem>
                </Field>
                <Button type="submit" variant="contained" color="primary" className={classNames('formButton')}>Register</Button>
              </Form>
            )}
          </Formik>
          <Typography variant="body1">if you already have an account, <Link to="/login">Login</Link> here</Typography>
        </Box>
      </Box>
    )
}

export default Register
