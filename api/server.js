const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

//connecting server to express
const server = express()

//setting up routers/endpoints
const projectsRouter = require('./projects/projectRouter')
const taskRouter = require('./tasks/taskRouter')
const tagRouter = require('./tags/tagRouter')


//middlewear
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

//set endpoint for routers
server.use('/api/projects', projectsRouter)
server.use('/api/tags', tagRouter)
server.use('/api/tasks', taskRouter)


server.get('/', (req,res) => {
    res.status(200).json({message: 'Api is up and running'})
})

module.exports = server