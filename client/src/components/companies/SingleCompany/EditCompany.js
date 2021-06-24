import React from 'react'
import { Box, TextField, Typography, Button, Paper } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'

import { putCompany } from '../../../actions/companyaction'

const EditCompany = ({ company, edit, handleEdit, id }) => {
    const dispatch = useDispatch()

    // console.log(company)

    const initialValues = {
        location: company.location,
        phone: company.phone,
        email: company.email
    }

    const handleEditSubmit = (values, actions) => {
        dispatch(putCompany(company._id, values))
        handleEdit()
    }

    return (
        <Box>
            { edit === true ? 
                <Paper style={{ marginTop: '1rem', padding: '1rem 2rem 2rem 2rem'}}>
                    <Formik initialValues={initialValues} onSubmit={handleEditSubmit}>
                        <Form>
                            <Field name="location" as={ TextField } multiline fullWidth style={{ marginTop: '0.25rem' }}/>
                            <Field name="phone" as={ TextField } fullWidth style={{ marginTop: '1rem' }}/>
                            <Field name="email" as={ TextField } fullWidth style={{ margin: '1rem 0' }}/>
                            <Button type="submit" variant="contained" color="primary">Update</Button>
                            <Button variant="contained" color="secondary" onClick={ () => handleEdit() }>Cancel</Button>
                        </Form>
                    </Formik>
                </Paper>
                : 
                <Box>
                    <Box style={{ marginTop: '0.5rem' }}>
                    { company.location && company.location.split('\n').map( (loc, index) => (
                        <Typography variant="h5" key={index}>{loc}</Typography>
                    ))}
                    </Box>
                    <Box style={{ marginTop: '0.5rem' }}>
                        <Typography varian="h6">{ company.phone }</Typography>
                    </Box>
                    <Box style={{ marginTop: '0.5rem' }}>
                        <Typography varian="h6">{ company.email }</Typography>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default EditCompany
