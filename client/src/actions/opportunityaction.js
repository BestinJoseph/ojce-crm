import { getAllOpportunityApi, getSingleOpportunityApi, postOpportunityApi, getSingleOpportunityCommentApi } from "../api/opportunity"

export const getAllOpportunityAction = () => async (dispatch) => {
    try {
        const { data } = await getAllOpportunityApi()
        dispatch({ type: 'GET_ALL_OPPORTUNITY', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const getSingleOpportunityAction = (id) => async (dispatch) => {
    try {
        const { data } = await getSingleOpportunityApi(id)
        dispatch({ type: 'GET_SINGLE_OPPORTUNITY', payload: data.opportunity })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const postOpportunityAction = (opportunity) => async (dispatch) => {
    try {
        const { data } = await postOpportunityApi(opportunity)
        dispatch({ type: 'POST_OPPORTUNITY', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const putSingleOpportunityCommentAction = (id, comment) => async (dispatch) => {
    try {
        const { data } = await getSingleOpportunityCommentApi(id, comment)
        dispatch({ type: 'POST_COMMENT_TO_OPPORTUNITY', payload: data})
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}