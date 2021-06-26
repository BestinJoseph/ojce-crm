import { combineReducers } from "redux";

import companies from './companyreducer'
import opportunities from './opportunityreducer'
import users from './userreducer'
import errors from './errorreducer'

export default combineReducers({
    companies,
    opportunities,
    users,
    errors
})