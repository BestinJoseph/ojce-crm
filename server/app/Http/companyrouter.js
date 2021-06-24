import express from 'express'
import Company from '../Model/companymodel.js'
import { getAllCompanies, getSingleCompany, postCompany, putCompany, deleteCompany } from '../Controller/companycontroller.js'

const router = express.Router()

router.get('/', getAllCompanies)
router.get('/:id', getSingleCompany)
router.post('/', postCompany)
router.put('/:id', putCompany)
router.delete('/:id', deleteCompany)

router.put('/:id/contact', async (req, res) => {
    const id = req.params.id
    const contact = req.body
    try {
        Company.findByIdAndUpdate(id, { $push: { contacts: contact }}, { new: true }, (err, data) => {
            if (data) {
                res.status(209).json({ message: 'contact added successfully', company: data })
            } else {
                console.log('nice....')
                res.status(401).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
})

router.put('/:id/contact/delete', async (req, res) => {
    const id = req.params.id
    const contact = req.body.contact
    try {
        Company.findByIdAndUpdate(id, { $pull: { contacts: { _id: contact } }}, { new: true }, (err, data) => {
            if (data) {
                res.status(201).json({ message: 'contact added successfully', company: data })
            } else {
                res.status(401).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
})

export default router