import React, { Fragment } from 'react'
import { Paper, TextField, Button, MenuItem } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './Createcompany'
import { postCompany } from '../../../actions/companyaction'

const Createcompany = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const props = useHistory()

    const initialValues = { name: '', location: '', phone: '', email: '', clienttype: '', contacts: []}

    const validationSchema = Yup.object().shape({
        
    })

    const handleSubmit = (values, action) => {
        dispatch(postCompany(values))
        action.resetForm()
        props.push('/company')
    }

    return (
        <Paper className={ classes.createcompany }>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values }) => (
                    <Form noValidate className={classNames('form')}>
                        <h4 className={classNames('headerText')}>Add Company:</h4>
                        <Field as={ TextField } label="Company Name" fullWidth name="name" className={classNames('textfield')} />
                        <Field as={ TextField } multiline label="Location" fullWidth name="location" className={classNames('textfield')}/>
                        <Field as={ TextField } label="Phone" fullWidth name="phone" className={classNames('textfield')}/>
                        <Field as={ TextField } label="email" fullWidth name="email" className={classNames('textfield')}/>
                        <Field label="Client Type" fullWidth name="clienttype" select defaultValue="" as={ TextField } className={classNames('textfield')}>
                            <MenuItem value="">Select Client Type</MenuItem>
                            <MenuItem value="current">Current Customer</MenuItem>
                            <MenuItem value="potential">Potential Customer</MenuItem>
                            <MenuItem value="target">Target Customer</MenuItem>
                        </Field>
                        <div className={classNames('contactsarray')}>
                            <h6 className={classNames('contactTitle')}>Contacts</h6>
                            <FieldArray name="contacts" >
                                {({ insert, push, remove }) => (
                                    <Fragment>
                                        { values.contacts && values.contacts.map( (contact, index) => (
                                            <Paper className={classNames('contact')} key={index}>
                                                <div className={classNames('contactHeader')}>
                                                    <h6 className={classNames('contactTitle')}>Contact Person {index + 1}</h6>
                                                    <RemoveIcon onClick={ async () => { await new Promise( (r) => setTimeout( () => { remove(index) }, 500)) } } className={classNames('deleteButton')}/>
                                                </div>
                                                <Field as={TextField} name={`contacts[${index}].name`} fullWidth label="Name" />
                                                <Field as={TextField} name={`contacts[${index}].mobile`} fullWidth label="Mobile" style={{marginTop: '.75rem'}}/>
                                                <Field as={TextField} name={`contacts[${index}].email`} fullWidth label="Email" style={{marginTop: '.75rem'}}/>
                                                <Field as={TextField} name={`contacts[${index}].designation`} fullWidth label="Designation" style={{marginTop: '.75rem'}}/>
                                            </Paper>
                                        ))}
                                        <AddIcon className={classNames('addButton')} onClick={ async () => { await new Promise( (r) => setTimeout( () => { push({name: '', mobile: '', email: '', designation: ''} ) }, 500)) } } />
                                    </Fragment>
                                )}
                            </FieldArray>
                        </div>
                        <Button variant="contained" color="primary" type="submit" className={classNames('btn')}>Create</Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}

export default Createcompany