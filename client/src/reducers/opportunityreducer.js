/* eslint-disable import/no-anonymous-default-export */
const initialState = { opportunities: [], opportunity: {}}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_OPPORTUNITY':
            return {  ...state, opportunities: [ ...action.payload.opportunities ] }
        case 'POST_OPPORTUNITY':
            return { ...state, opportunities: [ ...state.opportunities, ...action.payload ]}
        case 'GET_SINGLE_OPPORTUNITY':
            return { ...state, opportunity: action.payload }
        case 'POST_COMMENT_TO_OPPORTUNITY':
            console.log(action.payload.opportunity)
            return { ...state, opportunity: action.payload.opportunity }
        default:
            return state
    }
}