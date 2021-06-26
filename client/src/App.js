import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import Header from './components/layouts/Header'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Company from './components/companies/Company'
import Createcompany from './components/companies/Createcompany'
import Opportunity from './components/opportunities/Opportunity'
import OpportunityCreate from './components/opportunities/OpportunityCreate'
import SingleCompany from './components/companies/SingleCompany'
import OpporunitySingle from './components/opportunities/OpportunitySingle'

import AuthRoute from './components/private-routes/AuthRoute'

function App() {
  const { users: { isAuthenticated }, errors: { errors } } = useSelector( state => state )

  return (
    <Fragment>
      <Router>
        { isAuthenticated ? <Header /> : '' }
        { errors ? <Typography variant="body1">{ errors.message }</Typography> : '' }
        <Switch>
          <AuthRoute path="/" exact component={Dashboard}/>
          <Route path="/register" exact><Register /></Route>
          <Route path="/login" exact><Login /></Route>
          <AuthRoute path="/about" exact component={About}/>
          <AuthRoute path="/company" exact component={Company} />
          <AuthRoute path="/company/create" exact component={Createcompany} />
          <AuthRoute path="/company/:id" exact component={SingleCompany} />
          <AuthRoute path="/opportunity" exact component={Opportunity} />
          <AuthRoute path="/opportunity/create" exact component={OpportunityCreate} />
          <AuthRoute path="/opportunity/:id" exact component={OpporunitySingle} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
