import express from 'express'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import passport from 'passport'

import company from './app/Http/companyrouter.js'
import opportunity from './app/Http/opportunityrouter.js'
import auth from './app/Http/authrouter.js'
import passportconfig from './config/passport.js'

const app = express()
const __dirname = path.resolve()
const port = process.env.PORT || 8000
dotenv.config()
const dbURI = process.env.DB_URI

app.use(express.json())
app.use(express.static( path.join(__dirname, 'public')))
app.use(cors())
app.use(passport.initialize())

passportconfig(passport)

app.use('/api/company', company)
app.use('/api/opportunity', opportunity)
app.use('/api/auth', auth)

mongoose.connect(dbURI, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err) {
        app.listen(port, () => console.log('running in port ', port))
    } else {
        console.log(err.message)
    }
})