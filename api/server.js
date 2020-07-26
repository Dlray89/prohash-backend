const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const session = require("express-session")

//connecting server to express
const server = express()


const restricted = require('../auth/restricted')

//setting up routers/endpoints
const projectsRouter = require('./projects/projectRouter')
const taskRouter = require('./tasks/taskRouter')
const tagRouter = require('./tags/tagRouter')
const userRouter = require('./users/userrouter')
const authRouter = require('../auth/auth-router')

const sessionCOnfig = {
    name: 'projectcookie',
    secret: 'cookies are safe',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: true,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true
}

//middlewear
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use(session(sessionCOnfig))

//set endpoint for routers
server.use('/api/projects',restricted, projectsRouter)
server.use('/api/tags',restricted, tagRouter)
server.use('/api/tasks',restricted, taskRouter)
server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)


server.get('/', (req,res) => {
    res.status(200).json({message: 'Api is up and running'})
})

module.exports = server