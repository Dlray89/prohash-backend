const express = require('express')
const Router = express.Router()

const userDB = require('./usermodel')
const restricited = require('../../auth/restricted')

Router.use(restricited)

Router.get('/', (req,res) => {
    userDB.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => res.send(err))
})




Router.get('/:id', (req,res) => {
    userDB.findById(req.params.id)
    .then((user) => {
        user? res.status(200).json(user)
        : res.status(404).json({message: 'user not found'})
    })
    .catch(err => {
        res.status(500).json({ message: `can't retrieve user`})
    })
})

Router.get('/username/:username', (req,res) => {
    const { username } = req.params
    userDB.findByUsername(username)
    .then((user) => {
        user
        ? res.status(200).json(user)
        : res.status(404).json({message: `Person with that username can't be found`})
    })
    .catch(err => {
        res.status(500).json({ message: `can't retrive person with that username`})
    })
})

Router.post('/', (req,res) => {
    userDB.add(req.body)
    .then(user => [
        res.status(201).json(user)
    ])
    .catch(err => {
        res.status(500).json({ message: `error adding user`})
    })
})


module.exports = Router