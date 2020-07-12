const express = require('express')
const db = require('./projectModel')
const router = express.Router()

router.get('/', (req,res) => {
    db
    .find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({errorMessage: `{err}: could not find projects`})
    })
})

module.exports = router