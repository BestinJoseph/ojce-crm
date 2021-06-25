import express from 'express'

import Opportunity from '../Model/opportunitymodel.js'
import Comment from '../Model/commentmodel.js'
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

router.put('/:id/comment', async (req, res) => {
    const id = req.params.id
    const oldOpp = await Opportunity.findById(id)
    // console.log(oldOpp)
    const comment = req.body
    // console.log(comment)
    const updatedOpp = {
        $set: {
            stage: comment.stage === '' ? oldOpp.stage : comment.stage, 
            status: comment.status === '' ? oldOpp.status : comment.status,
            priority: comment.priority === '' ? oldOpp.priority : comment.priority,
            lastcontact: oldOpp.lastCommented,
            nextacontact: comment.nextacontact === '' ? oldOpp.nextacontact : comment.nextacontact,
            nextaction: comment.visittype,
            lastCommented: new Date(),
            purpose: comment.purpose === '' ? oldOpp.purpose : comment.purpose,
            project: comment.project === '' ? oldOpp.project : comment.project,
            value: comment.value === '' ? oldOpp.value : comment.value,
        }
    }

    const commentNew = {
        stage: comment.stage, 
        status: comment.status === '' ? oldOpp.status : comment.status, 
        visittype: comment.visittype, 
        nextacontact: comment.nextacontact,
        priority: comment.priority,
        description: comment.description,
        opportunity: id
    }

    try {
        Comment.create(commentNew, (err, comm) => {
            if( err ) {
                res.status(400).json({ error: err.message })
            } else {
                Opportunity.findByIdAndUpdate( id, { ...updatedOpp, $push: {  comment: comm._id } }, {new: true}, (err, data) => {
                    if( data ) {
                        console.log(data)
                        res.status(200).json({ opportunity: data })
                    } else {
                        res.status(400).json({ error: err.message })
                    }
                }).populate('comment')
            }
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

export default router
