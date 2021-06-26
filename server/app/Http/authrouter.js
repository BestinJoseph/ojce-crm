import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../Model/usermodel.js'
import { validationRegisterInputs, validationLoginInputs } from '../../middlewares/authValidation.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        await User.find((err, users) => {
            if(users) {
                res.status(200).json({ users })
            } else {
                res.status(400).json({ error: err.message })
            }
        })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.post('/register', async (req, res) => {
    const { errors, isValid} = validationRegisterInputs(req.body)
    
    if(!isValid) {
        res.status(400).json({ errors: errors })
    } else {
        User.findOne({ email: req.body.email }, (err, user) => {
            if(user) {
                res.status(400).json({ errors: { message: 'Email already exists.'} })
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if(err) {
                            res.status(400).json({ errors: err.message })
                        } else {
                            req.body.password = hash
                            User.create(req.body, (err, data) => {
                                if(err) {
                                    res.status(400).json({ errors: err.message })
                                } else {
                                    res.status(209).json(data)
                                }
                            })
                        }
                    })
                })
            }
        })
    }
})

router.post('/login', async (req, res) => {
    const { errors, isValid} = validationLoginInputs(req.body)
    
    if(isValid) {
        User.findOne({ email: req.body.email }, (err, user) => {
            if(err) {
                res.status(400).json({ error: err.message })
            } else {
                if(!user) {
                    res.status(400).json({ error: "Invalid Login details" })
                } else {
                    bcrypt.compare(req.body.password, user.password).then( isMatch => {
                        if( isMatch ) {
                            const payload = { id: user._id, name: user.name, branch: user.branch }
                            jwt.sign(payload, process.env.SECRET, { expiresIn: 31556926}, (err, token) => {
                                if(err) {
                                    res.status(400).json({ error: err.message })
                                } else {
                                    res.status(200).json({ token: 'Bearer ' + token})
                                }
                            })
                        }
                    }).catch( err => res.status(400).json({ error: err.message }))
                }
            }
        })
    } else {
        res.status(400).json({ errors: errors.message })
    }
})

router.post('/logout', async (req, res) => {
    res.status(209).json({msg: 'success'})
})

export default router