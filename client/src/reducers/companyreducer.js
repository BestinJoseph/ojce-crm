/* eslint-disable import/no-anonymous-default-export */
const initialState = { companies: [], company: {}}

export default (state = initialState, action ) => {
    switch (action.type) {
        case 'GET_ALL_COMPANY':
            return { ...state, companies: action.payload }
        case 'GET_ONE_COMPANY':
            return { ...state, company: action.payload.company }
        case 'PUT_COMPANY':
            return { ...state, company: action.payload } 
        case 'POST_CONTACT_TO_COMPANY':
            return state.company.contacts.push(action.payload)
        case 'DELETE_ONE_COMPANY':
            return { ...state, company: {} } 
        case 'POST_COMPANY':
            return [ ...state, action.payload ]
        default:
            return state
    }
}