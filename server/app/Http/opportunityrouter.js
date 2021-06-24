import express from 'express'

import Opportunity from '../Model/opportunitymodel.js'
import { getAllOpportunities, getOneOpportunity, postOpportunity, putOpportunity, deleteOpportunity } from '../Controller/opportunitycontroller.js'

const router = express.Router()

router.get('/', getAllOpportunities)
router.get('/:id', getOneOpportunity)
router.post('/', postOpportunity)
router.put('/:id', putOpportunity)
router.delete('/:id', deleteOpportunity)

router.put('/:id/department', async (req, res) => {
    const id = req.params.id
    try {
        Opportunity.findByIdAndUpdate( id, { $push: { department: { $each: req.body.department } } }, {new: true}, (err, data) => {
            if( data ) {
                res.status(200).json({ opportunities: data })
            } else {
                res.status(400).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.put('/:id/department/delete', async (req, res) => {
    const id = req.params.id
    try {
        Opportunity.findByIdAndUpdate( id, { $pull: { department: { $in : req.body.department } } }, {new: true}, (err, data) => {
            if( data ) {
                res.status(200).json({ opportunities: data })
            } else {
                res.status(400).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

export default router
