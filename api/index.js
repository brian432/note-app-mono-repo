require('dotenv').config()
require('./mongo')

const { PORT } = process.env
const express = require('express')
const logger = require('./middleware/loggerMidleware')
const cors = require('cors')

const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')

const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const loginRouter = require('./controllers/login')


const app = express()

app.use(express.json())
app.use(express.static('../app/build'))

app.use(logger)

app.use(cors())

app.use('/api/login', loginRouter)
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)


app.use(notFound)
app.use(handleErrors)

const server = app.listen(PORT)

module.exports = { app, server }