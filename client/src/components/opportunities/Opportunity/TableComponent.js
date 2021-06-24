import React, { useState } from 'react'
import { Paper, Table, TableHead, TableBody, TableCell, TableRow, TableContainer, TablePagination } from '@material-ui/core'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

const TableComponent = ({ opportunities }) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const history = useHistory()

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <Paper style={{ marginTop: '2rem' }}>
            <TableContainer>
                <Table>
                    <TableHead style={{ background: 'blue', fontWeight: '600' }}>
                        <TableRow>
                            <TableCell style={{ fontWeight: '600', color: 'white' }}>
                                Sl No.
                            </TableCell>
                            <TableCell style={{ fontWeight: '600', color: 'white' }}>
                                Company Name
                            </TableCell>
                            <TableCell style={{ fontWeight: '600', color: 'white' }}>
                                Contact Person
                            </TableCell>
                            <TableCell style={{ fontWeight: '600', color: 'white' }}>
                                Deal Stage
                            </TableCell>
                            <TableCell style={{ fontWeight: '600', color: 'white' }}>
                                Status
                            </TableCell>
                            <TableCell style={{ fontWeight: '600', color: 'white' }}>
                                Next Action
                            </TableCell>
                            <TableCell style={{ fontWeight: '600', color: 'white' }}>
                                Action Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    { opportunities && opportunities.map( (opp, index) => (
                        <TableRow key={index} hover onClick={ () => history.push(`/opportunity/${opp._id}`)}>
                            <TableCell>
                                { index + 1 }
                            </TableCell>
                            <TableCell>
                                { opp.company }
                            </TableCell>
                            <TableCell>
                                { opp.contact }
                            </TableCell>
                            <TableCell>
                                { opp.stage }
                            </TableCell>
                            <TableCell>
                                { opp.status }
                            </TableCell>
                            <TableCell>
                                { opp.nextaction }
                            </TableCell>
                            <TableCell>
                                { moment(opp.nextacontact).format('DD MMM, YYYY') }
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={opportunities.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default TableComponent
