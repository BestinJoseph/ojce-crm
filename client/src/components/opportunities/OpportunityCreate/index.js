import React from 'react'
import { Paper, TextField, Button, MenuItem, Box, Typography } from '@material-ui/core'
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CheckboxWithLabel } from 'formik-material-ui'

import useStyles from './OpportunityCreate'
import { postOpportunityAction } from '../../../actions/opportunityaction'

const OpportunityCreate = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const props = useHistory()

    const initialValues = { company: '', contact: '', purpose: '', project: '', category: [], priority: '', status: '', value: '', source: '', branch: ''}

    const validationSchema = Yup.object().shape({
        
    })

    const handleSubmit = (values, action) => {
        dispatch(postOpportunityAction(values))
        action.resetForm()
        props.push('/opportunity')
    }

    return (
        <Paper className={ classes.opportunitycreate }>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values }) => (
                    <Form noValidate className={classNames('form')}>
                        <h4 className={classNames('headerText')}>New Opportunity</h4>
                        <Field label="Company" fullWidth name="company" select defaultValue="" as={ TextField } className={classNames('textfield')}>
                            <MenuItem value="">Select Company Name</MenuItem>
                            <MenuItem value="el seif">El Seif</MenuItem>
                            <MenuItem value="fast">Fast</MenuItem>
                            <MenuItem value="al bawani">Al Bawani</MenuItem>
                        </Field>
                        <Field label="Contact Person" fullWidth name="contact" select defaultValue="" as={ TextField } className={classNames('textfield')}>
                            <MenuItem value="">Select Contact Person</MenuItem>
                            <MenuItem value="john doe">John Doe</MenuItem>
                            <MenuItem value="tim sheik">Tim Sheik</MenuItem>
                            <MenuItem value="mohd brayan">Mohd Brayan</MenuItem>
                        </Field>
                        <Field label="Visit Purpose" fullWidth name="purpose" select defaultValue="" as={ TextField } className={classNames('textfield')}>
                            <MenuItem value="">Select Visit Purpose</MenuItem>
                            <MenuItem value="project">Project Visit</MenuItem>
                            <MenuItem value="current">General Visit</MenuItem>
                            <MenuItem value="marketing">Marketing Visit</MenuItem>
                        </Field>
                        { values.purpose === 'project' ? <Field as={ TextField } multiline label="Project Name" fullWidth name="project" className={classNames('textfield')}/> : '' }
                        { values.purpose === 'project' ? <Field as={ TextField } multiline label="Project Value" fullWidth name="value" className={classNames('textfield')}/> : '' }
                        <Box style={{ margin: '.75rem 0'}}>
                            <Typography variant="body1" style={{ marginBottom: '.5rem'}}>Target Department</Typography>
                            <Field component={ CheckboxWithLabel } type="checkbox" value="geotechnical" name="category" Label={{ label: 'Geotechnical' }}/>
                            <Field component={ CheckboxWithLabel } type="checkbox" value="material"  name="category" Label={{ label: 'Material' }}/>
                            <Field component={ CheckboxWithLabel } type="checkbox" value="survey"  name="category" Label={{ label: 'Survey' }}/>
                            <Field component={ CheckboxWithLabel } type="checkbox" value="chemical"  name="category" Label={{ label: 'Chemical' }}/>
                            <Field component={ CheckboxWithLabel } type="checkbox" value="geophysical"  name="category" Label={{ label: 'Geophysical' }}/>
                            <Field component={ CheckboxWithLabel } type="checkbox" value="ojpad"  name="category" Label={{ label: 'OJPAD' }}/>
                        </Box>
                        <Field label="Priority" fullWidth name="priority" select defaultValue="" as={ TextField } className={classNames('textfield')}>
                            <MenuItem value="">Select Client Priority</MenuItem>
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Field>
                        <Field label="Status" fullWidth name="status" select defaultValue="" as={ TextField } className={classNames('textfield')}>
                            <MenuItem value="">Select Visit Status</MenuItem>
                            <MenuItem value="success">Success</MenuItem>
                            <MenuItem value="follow up">Need Follow Up</MenuItem>
                            <MenuItem value="no project">No Project</MenuItem>
                        </Field>
                        <Field label="Source" fullWidth name="source" select defaultValue="" as={ TextField } className={classNames('textfield')}>
                            <MenuItem value="">Select Referal</MenuItem>
                            <MenuItem value="website">Website</MenuItem>
                            <MenuItem value="current customer">Previous Project</MenuItem>
                            <MenuItem value="social media">Social Media</MenuItem>
                            <MenuItem value="other branches">Other Branch</MenuItem>
                        </Field>
                        { values.source === 'other branch' ? <Field as={ TextField } multiline label="Other Branch" fullWidth name="branch" className={classNames('textfield')}/> : '' }
                        <Button variant="contained" color="primary" type="submit" className={classNames('btn')}>Create</Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}

export default OpportunityCreate