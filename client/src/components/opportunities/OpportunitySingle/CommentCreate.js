import React, { Fragment } from 'react'
import { Paper, Button, MenuItem, TextField, Box } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'

import { putSingleOpportunityCommentAction } from '../../../actions/opportunityaction'

const CommentCreate = ({ id, handleCanc }) => {
    const dispatch = useDispatch()

    const initialValues = { description:'', status: '', visittype: '', stage: '', nextacontact: '', priority: '', reason: '', purpose: '', project: '', value: '' }

    const handleSubmit = (values, action) => {
        if(values.stage !== 'closed') {
            values.status = ''
        }
        dispatch(putSingleOpportunityCommentAction(id, values))
        action.resetForm()
        handleCanc()
    }

    const handleCancel = (action) => {
        action()
        handleCanc()
    }

    return (
        <Paper style={{ padding: '1rem', marginTop: '0.5rem' }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, resetForm }) => (
                    <Form noValidate>
                        <Field as={ TextField } label="Deal Stage" name="stage" fullWidth select style={{ marginBottom: '1rem'}} InputLabelProps={{ shrink: true }}>
                            <MenuItem value="">Select Current Stage</MenuItem>
                            <MenuItem value="follow up">Following up</MenuItem>
                            <MenuItem value="proposal sent">Proposal Sent</MenuItem>
                            <MenuItem value="negotation">Negotation</MenuItem>
                            <MenuItem value="qualified">Qualified</MenuItem>
                            <MenuItem value="contract">Contract</MenuItem>
                            <MenuItem value="closed">Closed</MenuItem>
                        </Field>
                        { values.stage === 'proposal sent' ? 
                            <Box>
                                <Field as={ TextField } label="Purpose of Visit" name="purpose" defaultValue="" fullWidth select style={{ marginBottom: '1rem'}} InputLabelProps={{ shrink: true }}>
                                    <MenuItem value="">Select Visit Type</MenuItem>
                                    <MenuItem value="project">Project</MenuItem>
                                    <MenuItem value="current">Current</MenuItem>
                                    <MenuItem value="marketing">Marketing</MenuItem>
                                </Field>
                            </Box>
                            : ''
                        }
                        { values.purpose === 'project' ? <Field as={ TextField } multiline label="Project Name" fullWidth name="project" style={{ marginBottom: '1rem'}} InputLabelProps={{ shrink: true }}/> : '' }
                        { values.purpose === 'project' ? <Field as={ TextField } multiline label="Project Value" fullWidth name="value" style={{ marginBottom: '1rem'}} InputLabelProps={{ shrink: true }}/> : '' }
                        { values.stage !== 'closed' ? 
                            <Fragment>
                                <Field as={ TextField } label="Next Contact Date" name="nextacontact" type="date" fullWidth InputLabelProps={{ shrink: true }} style={{ marginBottom: '1rem'}}/>
                                <Field as={ TextField } label="Next Visit Type" name="visittype" defaultValue="" fullWidth select style={{ marginBottom: '1rem'}} InputLabelProps={{ shrink: true }}>
                                    <MenuItem value="">Select Visit Type</MenuItem>
                                    <MenuItem value="email">Email</MenuItem>
                                    <MenuItem value="visit">Visit</MenuItem>
                                    <MenuItem value="meeting">Meeting</MenuItem>
                                    <MenuItem value="phone">Telephone</MenuItem>
                                </Field>
                                <Field as={ TextField } label="Next Visit Priority" name="priority" defaultValue="" fullWidth select style={{ marginBottom: '1rem'}} InputLabelProps={{ shrink: true }}>
                                    <MenuItem value="">Select Visit Type</MenuItem>
                                    <MenuItem value="high">High</MenuItem>
                                    <MenuItem value="medium">High</MenuItem>
                                    <MenuItem value="low">Low</MenuItem>
                                </Field>
                            </Fragment>
                            : 
                            <Fragment>
                                <Field as={ TextField } label="Closed Type" name="status" defaultValue="" fullWidth select style={{ marginBottom: '1rem'}} InputLabelProps={{ shrink: true }}>
                                    <MenuItem value="">Select Closed Type</MenuItem>
                                    <MenuItem value="won">Won</MenuItem>
                                    <MenuItem value="lost">Lost</MenuItem>
                                    <MenuItem value="abandon">Abandon</MenuItem>
                                </Field>
                                { values.status === 'lost' || values.status === 'abandon' ? 
                                    <Field as={ TextField } label="Reason" name="reason" defaultValue="" fullWidth select style={{ marginBottom: '1rem'}} InputLabelProps={{ shrink: true }}>
                                        <MenuItem value="">Select Reason</MenuItem>
                                        <MenuItem value="competitor">Competitor</MenuItem>
                                        <MenuItem value="price">price</MenuItem>
                                        <MenuItem value="out of scope">Out of Scope</MenuItem>
                                    </Field>
                                    : ''
                                }
                            </Fragment>
                        }
                        <Field as={ TextField } multiline label="Meeting Feedback" name="description" fullWidth style={{ marginBottom: '2rem'}} InputLabelProps={{ shrink: true }}/>
                        <Button variant="contained" color="primary" type="submit" style={{ marginRight: '1rem'}}>CREATE</Button>
                        <Button variant="contained" color="secondary" onClick={ () => handleCancel(resetForm)}>CANCEL</Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}

export default CommentCreate
