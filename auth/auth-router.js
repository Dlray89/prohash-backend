const bcryptjs = require('bcryptjs')
const JWT = require('jsonwebtoken')
const router = require('express').Router()

const Users = require('../api/users/usermodel')
const { isValid } = require('../api/users/user_service')

router.post('/register', (req,res) => {
    const credentials = req.body

    if (isValid(credentials)) {
        const rounds = process.env.BCRYPY_ROUNDS || 8

        const hash = bcryptjs.hashSync(credentials.password, rounds)

        credentials.password = hash

        Users.add(credentials)
        .then(user => {
            res.status(201).json({ data: user})
        })
        .catch(err => {
            res.status(500).json({message: err.message })
        })
    } else {
        res.status(400).json({
            message: 'please provide username and password. password must be alphanumeric'
        })
    }
})

router.post('/login', (req,res) => {
    const{username, password} = req.body

    if (isValid(req.body)) {
        Users.findBy({username: username})
        .then(([user]) => {
            if (user && bcryptjs.compareSync(password, user.password)) {
                const token = makeJWT(user)
                res.status(200).json({
                    message: "welcome user",
                    token})
            } else {
                res.status(401).json({message: "invaild credentials"})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    } else {
        res.status(400).json({message: 'please provide username and password'})
    }
})


function makeJWT(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role
    }
    const secret = process.env.JWT_SECRET || 'this is a secret'
    const options = {
        expiresIn: '2h'
    }
    return JWT.sign(payload, secret, options)
}
module.exports = router