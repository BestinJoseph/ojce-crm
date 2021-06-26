/* eslint-disable import/no-anonymous-default-export */
const intialState = {}

export default (state = intialState, action) => {
    switch (action.type) {
        case 'GET_ERRORS':
            return { ...state, errors: action.payload }
        case 'REMOVE_ERRORS':
            return { ...state, errors: {} }
        default:
            return state
    }
}