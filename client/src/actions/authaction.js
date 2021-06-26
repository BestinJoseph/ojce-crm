import jwt_decode from 'jwt-decode'

import { registerApi, loginApi, logoutApi } from '../api/auth'
import setAuthToken from '../utils/setAuthToken'

export const registerAction = (datas, { push }) => async (dispatch) => {
    try {
        await registerApi(datas)
        push('/login')
        dispatch({ type: 'REMOVE_ERRORS' })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err })
    }
}

export const loginAction = (datas, { push, location }) => async (dispatch) => {
    try {
        const { data: { token } } = await loginApi(datas)
        localStorage.setItem('jwttoken', token)
        setAuthToken(token)
        const user = jwt_decode(token)
        dispatch({ type: 'LOGGEDIN_USER', payload: user })
        dispatch({ type: 'REMOVE_ERRORS' })
        push(location.state.from.pathname)
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err })
    }
}

export const logoutAction = () => async (dispatch) => {
    try {
        await logoutApi()
        localStorage.removeItem('jwttoken')
        setAuthToken(false)
        dispatch({ type: 'USER_LOGOUT' })
    } catch (err) {
        dispatch({ type: 'GET_ERRORs', payload: err })
    }
}