import { Box, Grid, Typography, Paper, TextField, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Form, Field } from 'formik';

import useStyles from './SingleCompany'
import { getCompany, postCompanyContact } from '../../../actions/companyaction'
import EditCompany from './EditCompany';

const SingleCompany = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { company } = useSelector((state) => state.companies )
    const { id } = useParams()
    const [contactForm, setContactForm] = useState(false)
    const newcontact = []
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        dispatch(getCompany(id))
    }, [dispatch, id])

    const handleEdit = () => {
        setEdit(false)
    }

    const handleContactSubmit = (values, action) => {
        newcontact.push(values)
        if( newcontact.length === 1 ) {
            dispatch(postCompanyContact(id, newcontact))
            action.resetForm()
            setContactForm(false)
        }
    }

    return (
        <Box className={classes.singlecompany}>
            <Box style={{ display: 'flex', alignItems: 'center'}}>
                <Typography variant="h4" style={{ marginRight: '1rem' }}>{ company.name }</Typography>
                <EditIcon style={{ border: '2px solid blue', padding: '0.5rem', borderRadius: '50%' }} onClick={ () => setEdit(true)}/>
            </Box>
            <Grid container>
                <Grid item sm={9} style={{ paddingRight: '2rem' }}>
                    <Box style={{ marginTop: '1rem' }}>
                        <Typography variant="body1" style={{ textTransform: 'capitalize', background: 'yellow', display: 'inline-block' }}>{ `${company.clienttype} client` }</Typography>
                    </Box>

                    <EditCompany company={company} edit={edit} handleEdit={handleEdit} />

                    <Box style={{ margin: '2rem 0 1rem'}}>
                        <Typography variant="h4" style={{ marginBottom: '1rem' }}>Projects</Typography>
                        <Paper style={{ padding: '1rem'}}>
                            New Building Project - Malaz
                        </Paper>
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h5" style={{ marginRight: '1rem'}}>Contact Persons</Typography>
                        <AddIcon onClick={ () => setContactForm( true ) } style={{ border: '2px solid green', borderRadius: '50%', padding: '0.5rem' }} />
                    </Box>
                    
                        { contactForm !== true ? '' :
                            <Paper style={{ padding: '1rem', margin: '1.5rem 0' }}>
                                <Formik initialValues={{ name: '', mobile: '', email: '', designation: '' }} onSubmit={handleContactSubmit}>
                                    <Form>
                                        <Typography variant="h6">Create New Contact</Typography>
                                        <Field as={ TextField } name="name" label="Name" fullWidth style={{ marginTop: '0.5rem'}}/>
                                        <Field as={ TextField } name="mobile" label="Mobile" fullWidth style={{ marginTop: '0.5rem'}}/>
                                        <Field as={ TextField } name="email" label="Email" fullWidth style={{ marginTop: '0.5rem'}}/>
                                        <Field as={ TextField } name="designation" label="Designation" fullWidth style={{ marginTop: '0.5rem'}}/>
                                        <Box style={{ paddingTop: '1.5rem' }}>
                                            <Button type="submit" variant="contained" color="primary" style={{ marginRight: '1rem' }}>Create</Button>
                                            <Button onClick={ () => setContactForm( false ) } variant="contained" color="secondary">Cancel</Button>
                                        </Box>
                                    </Form>
                                </Formik>
                            </Paper>
                        }
                    { company.contacts && company.contacts.map( (contact, index) => (
                        <Paper key={index} style={{ padding: '1rem', marginTop: '1rem'}}>
                            <Box style={{ paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography variant="h5" >{ contact.name }</Typography>
                                <EditIcon style={{ border: '1px solid blue', padding: '0.25rem', borderRadius: '50%' }} fontSize="small"/>
                            </Box>
                            <Typography>{ contact.designation }</Typography>
                            <Typography>First Contact</Typography>
                            <Typography>{ contact.email }</Typography>
                            <Typography>{ contact.mobile }</Typography>
                        </Paper>
                    ))}
                </Grid>
            </Grid>
        </Box>
    )
}

export default SingleCompany
