import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getCompanies } from './actions/companyaction'
import Header from './components/layouts/Header'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Company from './components/companies/Company'
import Createcompany from './components/companies/Createcompany'
import Opportunity from './components/opportunities/Opportunity'
import OpportunityCreate from './components/opportunities/OpportunityCreate'
import SingleCompany from './components/companies/SingleCompany'
import OpporunitySingle from './components/opportunities/OpportunitySingle'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getCompanies() )
  },[dispatch])

  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact><Dashboard /></Route>
          <Route path="/about" exact><About /></Route>
          <Route path="/company" exact><Company /></Route>
          <Route path="/company/create" exact><Createcompany /></Route>
          <Route path="/company/:id" exact><SingleCompany /></Route>
          <Route path="/opportunity" exact><Opportunity /></Route>
          <Route path="/opportunity/create" exact><OpportunityCreate /></Route>
          <Route path="/opportunity/:id" exact><OpporunitySingle /></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
