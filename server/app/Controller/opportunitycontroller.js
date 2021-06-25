import Opportunity from '../Model/opportunitymodel.js'

export const getAllOpportunities = async (req, res) => {
    try {
        const data = await Opportunity.find().populate("comment")
        res.status(200).json({ opportunities: data })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const getOneOpportunity = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Opportunity.findById(id).populate("comment").populate('opportunities')
        res.status(200).json({ opportunity: data })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const postOpportunity = async (req, res) => {
    console.log(req.body)
    try {
        Opportunity.create( req.body, (err, data) => {
            if( data ) {
                res.status(200).json({ opportunities: data })
            } else {
                console.log(err.message)
                res.status(400).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const putOpportunity = async (req, res) => {
    const id = req.params.id
    try {
        Opportunity.findByIdAndUpdate( id, { $set: req.body }, {new: true}, (err, data) => {
            if( data ) {
                res.status(200).json({ opportunities: data })
            } else {
                res.status(400).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const deleteOpportunity = async (req, res) => {
    const id = req.params.id
    try {
        Opportunity.findByIdAndDelete( id, (err, data) => {
            if( data ) {
                res.status(200).json({ message: 'deleted successfully' })
            } else {
                res.status(400).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}