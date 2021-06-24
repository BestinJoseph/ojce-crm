import mongoose from 'mongoose'

const companySchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    contacts: {
        type: [Object],
        require: false
    },
    clienttype: {
        type: String,
        require: true
    },
    lastcontacted: {
        type: String,
        require: false
    }
}, {timestamps: true})

export default mongoose.model('companies', companySchema)