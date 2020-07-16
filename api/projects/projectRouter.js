const express = require('express')
const db = require('./projectModel.js')
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

router.get('/:id', (req,res) => {
    const { id } = req.params

    db
    .findById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: `${error}: Could not find project`})
    })

})
    

router.post('/', (req,res) => {
    const newproject = req.body
        db
        .add(newproject)
        .then(newproject => {
            res.status(201).json(newproject)
        })
        .catch(error => {
            res.status(500).json({errorMessage: `${error}: We could not add your project`})
        })
    })


router.put('/:id', (req, res)=> {
    const { id } = req.params
    const updateproject = req.body

    db
    .update(id, updateproject)
    .then(updateproject => {
        res.status(201).json(updateproject)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: Sorry but we could not update your project`})
    })
})


router.delete('/:id', (req,res) => {
    const { id } = req.params

    db
    .remove(id)
    .then(deleteproject => {
        res.status(201).json(deleteproject)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}: sorry could not delete `})
    })
})



module.exports = router