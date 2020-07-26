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
        .then(users => {
            res.status(201).json({ data: users})
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
        .then(([users]) => {
            if (users && bcryptjs.compareSync(password, users.password)) {
                const token = makeJWT(users)
                res.status(200).json({
                    message: "welcome users",
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


function makeJWT(users) {
    const payload = {
        subject: users.id,
        username: users.username,
        role: users.role
    }
    const secret = process.env.JWT_SECRET || 'this is a secret'
    const options = {
        expiresIn: '2h'
    }
    return JWT.sign(payload, secret, options)
}
module.exports = router