import axios from 'axios'

export const getAllOpportunityApi = () => axios.get('/opportunity')

export const postOpportunityApi = (opportunity) => axios.post('/opportunity', opportunity)

export const getSingleOpportunityApi = (id) => axios.get( `/opportunity/${id}` )

export const getSingleOpportunityCommentApi = (id, comment) => axios.put( `/opportunity/${id}/comment`, comment )