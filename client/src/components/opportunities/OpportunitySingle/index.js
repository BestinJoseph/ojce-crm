import React, { useEffect, Fragment, useState } from 'react'
import { Box, Grid, Typography, Paper } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
// import CloseIcon from '@material-ui/icons/Close'

import useStyles from './OpportunitySingle'
import { getSingleOpportunityAction } from '../../../actions/opportunityaction'
import moment from 'moment'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList';

const OpportunitySingle = () => {
    const classes = useStyles()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { opportunity } = useSelector( state => state.opportunities )
    const [ addCo, setAddCo] = useState(false)

    useEffect(() => {
        dispatch(getSingleOpportunityAction(id))
    }, [dispatch, id])

    // console.log(opportunity.company)

    const handleCanc = () => {
        setAddCo(false)
    }

    return (
        <Box className={classes.singleopportunity}>
            <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Typography variant="h4" style={{ textTransform: 'uppercase' }}>{ opportunity.company }</Typography>
                <EditIcon style={{ marginLeft: '1rem', padding: '.75rem', border: '2px solid blue', borderRadius: '50%' }}/>
            </Box>
            <Grid container>
                <Grid item sm={9} style={{ paddingRight: '3rem', marginTop: '0.5rem' }}>
                    <Typography className={classes.dataValue} variant="body1">Deal Stage: <span>{ opportunity.stage }</span></Typography>
                    <Typography className={classes.dataValue} variant="body1">Purpose: <span>{ opportunity.purpose } Visit</span></Typography>
                    {
                        opportunity && opportunity.purpose === 'project' 
                            ? 
                            <Fragment>
                                <Typography className={classes.dataValue} variant="body1">Project Name: <span>{ opportunity.project }</span></Typography>
                                <Typography className={classes.dataValue} variant="body1">Project Value: <span>{ opportunity.value }</span></Typography> 
                            </Fragment>
                            : ''
                    }
                    <Typography className={classes.dataValue} variant="body1">Priority: <span>{ opportunity.priority }</span></Typography>
                    <Typography className={classes.dataValue} variant="body1">Status: <span>{ opportunity.status }</span></Typography>
                    <Typography className={classes.dataValue} variant="body1">Last Contact: <span>{ moment(opportunity.lastcontact).format('DD MMM, YYY') }</span></Typography>
                    <Typography className={classes.dataValue} variant="body1">Next Contact: <span>{ moment(opportunity.nextacontact).format('DD MMM, YYY') }</span></Typography>
                    <Typography className={classes.dataValue} variant="body1">Contact Type: <span>{ opportunity.nextaction }</span></Typography>
                    <Typography className={ opportunity.source === 'other branches' ? classes.dataValue : classes.dataValueLast} variant="body1">Referal: <span>{ opportunity.source }</span></Typography>
                    { opportunity.source === 'other branches' ? <Typography variant="body1" className={classes.dataValueLast}>Branch Name: <span>{ opportunity.branch }</span></Typography> : '' }
                    <Box style={{ marginTop: '1rem' }}>
                        <Typography variant="body1">Targeted Departments</Typography>
                        { opportunity.department && opportunity.department.length > 0 ? 
                            <Box style={{ display: 'flex' }}>
                                { opportunity.department.map( (dep, index) => (
                                    <Typography variant="body1" key={index} style={{ padding: '1rem', background: 'gold', marginRight: '1rem' }}>{dep}</Typography>
                                ))}
                            </Box>
                            : <Typography variant="body1" style={{ marginTop: '0.25rem' }}>General Visit</Typography>
                        }
                    </Box>
                    <Box style={{ marginTop: '2rem'}}>
                        <Typography variant="h4">Comments</Typography>
                        <CommentList comments={opportunity.comment}/>
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <Box style={{ marginTop: '0rem'}}>
                        <Typography variant="h6">Contact Person</Typography>
                        <Paper style={{ padding: '1rem', marginTop: '.5rem' }}>
                            <Typography variant="body1" style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>{ opportunity.contact }</Typography>
                            <Typography variant="body1" style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>+966 52 568 1592</Typography>
                            <Typography variant="body1" style={{ textTransform: 'capitalize' }}>info@email.com</Typography>
                        </Paper>
                    </Box>
                    { opportunity.stage === 'closed' ? '' : 
                        <Box style={{ marginTop: '1.5rem'}}>
                            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '2.5rem', }}>
                                <Typography variant="h5">Add Comment</Typography>
                                { addCo ? 
                                    ''
                                    : 
                                    <AddIcon onClick={ () => setAddCo(true) } style={{ border: '2px solid green', borderRadius: '50%', padding: '0.5rem', marginLeft: '1rem' }} /> }
                            </Box>
                            { addCo ? <CommentCreate id={id} handleCanc={handleCanc}/> : '' }
                        </Box>
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default OpportunitySingle
