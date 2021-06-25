import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'

const CommentList = ({ comments }) => {
    // console.log(comments)

    return (
        <Box style={{ marginTop: '.5rem' }}>
            { comments && comments.map( (comm, index) => (
                <Paper key={index} style={{ padding: '1rem', marginBottom: '1rem' }}>
                    <Box style={{ marginBottom: '1rem' }}>
                        Person Name - { comm.createdAt }
                    </Box>
                    <Typography variant="body1">{ comm.description }</Typography>
                    <Box style={{ borderTop: '1px solid Gainsboro', marginTop: '.5rem', paddingTop: '.75rem' }}>
                        Next Action - { comm.nextacontact }
                    </Box>
                </Paper>
            ))}
        </Box>
    )
}

export default CommentList
