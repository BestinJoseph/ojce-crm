import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    branch: {
        type: String,
        require: true,
        default: 'guest',
        enum: ['guest', 'riyadh', 'jeddah', 'qassim', 'madinah', 'hail', 'jubail']
    },
    approved: {
        type: String,
        require: true,
        default: false
    }
}, {timestamps: true})

export default mongoose.model('users', userSchema)