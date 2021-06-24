import axios from 'axios'

export const getAllCompanies = () => axios.get(`/company`)

export const getOneCompany = (id) => axios.get(`/company/${id}`)

export const postCompany = (company) => axios.post(`/company`, company)

export const putCompany = (id, company) => axios.put(`/company/${id}`, company)

export const postCompanyContactApi = (id, contacts) => axios.put(`/company/${id}/contact`, contacts)