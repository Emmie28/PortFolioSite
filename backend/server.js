const express = require('express')
const dotenv = require('dotenv').config() // allows to have .env file with the variables in it.
const colors = require('colors')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const multer = require('multer')

connectDB()

const app = express()


//To use body data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use('/api/users', require('./routes/userRoutes'))

app.use('/api/profile', require('./routes/profileRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))


