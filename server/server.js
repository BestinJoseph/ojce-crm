import express from 'express'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'

import company from './app/Http/companyrouter.js'
import opportunity from './app/Http/opportunityrouter.js'

const app = express()
const __dirname = path.resolve()
const port = process.env.PORT || 8000


app.use(express.json())
app.use(express.static( path.join(__dirname, 'public')))
app.use(cors())

app.use('/api/company', company)
app.use('/api/opportunity', opportunity)

mongoose.connect(dbURI, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err) {
        app.listen(port, () => console.log('running in port ', port))
    } else {
        console.log(err.message)
    }
})