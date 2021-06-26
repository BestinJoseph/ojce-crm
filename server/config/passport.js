import passportjwt from 'passport-jwt'

import User from '../app/Model/usermodel.js'

const { Strategy, ExtractJwt} = passportjwt

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET || "thisis007secretkey"

export default (passport) => {
    passport.use(
        new Strategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload._id, (err, user) => {
                if(err) {
                    return done(null, false)
                } else {
                    return done(null, true)
                }
            })
        })
    )
}