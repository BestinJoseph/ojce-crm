import * as api from '../api/company'

export const getCompanies = () => async (dispatch) => {
    try {
        const { data } = await api.getAllCompanies()
        dispatch({type: 'GET_ALL_COMPANY', payload: data.companies })
    } catch (err) {
        console.log(err.message)
    }
}

export const getCompany = (id) => async (dispatch) => {
    try {
        const { data } = await api.getOneCompany(id)
        dispatch({type: 'GET_ONE_COMPANY', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

export const postCompany = (newcompany) => async (dispatch) => {
    try {
        const { data } = await api.postCompany(newcompany)
        dispatch({type: 'POST_COMPANY', payload: data.company })
    } catch (err) {
        console.log(err.message)
    }
}

export const putCompany = (id, updatedcompany) => async (dispatch) => {
    try {
        const { data } = await api.putCompany(id, updatedcompany)
        dispatch({ type: 'PUT_COMPANY', payload: data.company })
    } catch (err) {
        console.log(err.message)
    }
}

export const postCompanyContact = (id, postcontact) => async (dispatch) => {
    try {
        await api.postCompanyContactApi(id, postcontact)
        dispatch({ type: 'POST_CONTACT_TO_COMPANY', payload: postcontact })
    } catch (err) {
        console.log(err.message)
    }
}