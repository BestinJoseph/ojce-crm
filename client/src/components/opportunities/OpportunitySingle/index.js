import React, { useEffect } from 'react'
import { Box, Grid, Typography, Paper } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './OpportunitySingle'
import { getSingleOpportunityAction } from '../../../actions/opportunityaction'
import moment from 'moment'

const OpportunitySingle = () => {
    const classes = useStyles()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { opportunity } = useSelector( state => state.opportunities )

    useEffect(() => {
        dispatch(getSingleOpportunityAction(id))
    }, [dispatch, id])

    // console.log(opportunity.company)

    return (
        <Box className={classes.singleopportunity}>
            <Grid container>
                <Grid item sm={9}>
                    <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Typography variant="h4" style={{ textTransform: 'uppercase' }}>{ opportunity.company }</Typography>
                        <EditIcon style={{ marginLeft: '1rem', padding: '.75rem', border: '2px solid blue', borderRadius: '50%' }}/>
                    </Box>
                    <Typography variant="body1">Deal Stage: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.stage }</span></Typography>
                    <Typography variant="body1">Purpose: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.purpose } Visit</span></Typography>
                    <Typography variant="body1">Project Name: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.project }</span></Typography>
                    <Typography variant="body1">Project Value: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.value }</span></Typography>
                    <Typography variant="body1">Priority: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.priority }</span></Typography>
                    <Typography variant="body1">Status: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.status }</span></Typography>
                    <Typography variant="body1">Last Contact: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ moment(opportunity.lastcontact).format('DD MMM, YYY') }</span></Typography>
                    <Typography variant="body1">Next Contact: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ moment(opportunity.nextacontact).format('DD MMM, YYY') }</span></Typography>
                    <Typography variant="body1">Next Action: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.nextaction }</span></Typography>
                    <Typography variant="body1">Previous Contact: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.status }</span></Typography>
                    <Typography variant="body1">Referal: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.source }</span></Typography>
                    { opportunity.source === 'other branches' ? <Typography variant="body1">Referal: <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem', textTransform: 'uppercase' }}>{ opportunity.source }</span></Typography> : '' }
                    <Box style={{ marginTop: '1rem' }}>
                        <Typography variant="body1">Targeted Departments</Typography>
                        { opportunity.department.length > 0 ? 
                            <Box style={{ display: 'flex' }}>
                                { opportunity.department.map( (dep, index) => (
                                    <Typography variant="body1" key={index} style={{ padding: '1rem', background: 'gold', marginRight: '1rem' }}>{dep}</Typography>
                                ))}
                            </Box>
                            : <Typography variant="body1" style={{ marginTop: '0.25rem' }}>Not Yet</Typography>
                        }
                    </Box>
                    

                    <Box style={{ marginTop: '1rem'}}>
                        <Typography variant="h6">Contact Person</Typography>
                        <Paper elevate style={{ padding: '1rem', marginTop: '.5rem' }}>
                            <Typography variant="body1" style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>{ opportunity.contact }</Typography>
                            <Typography variant="body1" style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>+966 52 568 1592</Typography>
                            <Typography variant="body1" style={{ textTransform: 'capitalize' }}>info@email.com</Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    Client visit comments
                </Grid>
            </Grid>
        </Box>
    )
}

export default OpportunitySingle
