import { combineReducers } from "redux";

import companies from './companyreducer'
import opportunities from './opportunityreducer'

export default combineReducers({
    companies,
    opportunities
})