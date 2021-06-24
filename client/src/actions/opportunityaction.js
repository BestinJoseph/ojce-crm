import { getAllOpportunityApi, getSingleOpportunityApi, postOpportunityApi } from "../api/opportunity"

export const getAllOpportunityAction = () => async (dispatch) => {
    try {
        const { data } = await getAllOpportunityApi()
        dispatch({ type: 'GET_ALL_OPPORTUNITY', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

export const getSingleOpportunityAction = (id) => async (disptach) => {
    try {
        const { data } = await getSingleOpportunityApi(id)
        disptach({ type: 'GET_SINGLE_OPPORTUNITY', payload: data.opportunity })
    } catch (err) {
        console.log(err.message)
    }
}

export const postOpportunityAction = (opportunity) => async (dispatch) => {
    try {
        const { data } = await postOpportunityApi(opportunity)
        console.log(data)
        dispatch({ type: 'POST_OPPORTUNITY', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}