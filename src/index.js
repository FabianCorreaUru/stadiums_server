const express = require('express')
const router = require('./routes')
const cors = require('cors')
const APP = express()
const PORT = process.env.PORT || 5000

// Settings
//var corsOptions = {origin: 'localhost:3000'}
var corsOptions = {origin: '*'}
APP.use(cors({origin: corsOptions}));

// Middlewares
APP.use(express.json())

// Routes
APP.use("/api",router)

APP.listen(PORT, () => { 
    console.log(`Server listening on port ${PORT}`) 
})