/* eslint-disable import/no-anonymous-default-export */
const intialState = { isAuthenticated: false, user: {}, loading: false }

export default (state = intialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return state
        case 'LOGGEDIN_USER':
            return { ...state, isAuthenticated: true, user: action.payload }
        case 'USER_LOADING':
            return { ...state, loading: true }
        case 'USER_LOGOUT':
            return { ...state, isAuthenticated: false, user: {}, loading: false }
        default:
            return state
    }
}