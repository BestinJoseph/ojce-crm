import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    status: {
        type: String,
        require: true
    }, 
    visittype: {
        type: String,
        require: false
    }, 
    stage: {
        type: String,
        require: true
    }, 
    nextacontact: {
        type: String,
        require: false,
    }, 
    priority: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: true
    },
    opportunity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'opportunities'
    }
}, {timestamps: true})

export default mongoose.model('comments', commentSchema)