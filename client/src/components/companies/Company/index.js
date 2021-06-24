import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Box, Paper, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, TablePagination, Grid } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './company'

const Company = () => {
  const classes = useStyles()
  const { companies } = useSelector( (state) => state.companies )
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const history = useHistory()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  // console.log(companies)

  const removeable = [ '_id', '__v', 'createdAt', 'updatedAt', 'contacts', 'companies', 'company']
  
  const title = companies.length > 0 ? Object.keys( companies && companies.reduce( (o, c) => Object.assign(o, c))).filter( ti => !removeable.includes(ti)) : []

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const handleClick = (_id) => {
    history.push('/company/' + _id)
  }

  return (
    <Box className={classes.company}>
      
      <Grid container>
        <Grid item sm={9} style={{ paddingRight: '3rem' }}>
          <Link to="/company/create" className={classNames('create')}>Add Company</Link>
          <Paper style={{ marginTop: '2rem' }}>
            <TableContainer>
              <Table>
                <TableHead style={{ background: 'blue'}}>
                  <TableRow>
                    { title && title.map( (ti, index) => (
                      <TableCell key={index} style={{  color: 'white' }}>
                        { ti }
                    </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  { companies && companies.map((company, index) => (
                    <TableRow key={index} hover onClick={() => handleClick(company._id)}>
                      <TableCell>
                        { company.name === "" ? "Not Updated" : company.name }
                      </TableCell>
                      <TableCell>
                        { company.location === "" ? "Not Updated" : company.location }
                      </TableCell>
                      <TableCell>
                        { company.phone === "" ? "Not Updated" : company.phone }
                      </TableCell>
                      <TableCell>
                        { company.email === "" ? "Not Updated" : company.email }
                      </TableCell>
                      <TableCell>
                        { company.clienttype === "" ? "Not Updated" : company.clienttype }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={companies.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
        <Grid item sm={3}>
          Notifications goes here...
        </Grid>
      </Grid>
    </Box>
  )
}

export default Company
