const express = require('express')
const cors = require('cors')
const port = 3000

const userEndpoint = require('./routes/users')
const prodEndpoint = require('./routes/product')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', userEndpoint)
app.use('/product', prodEndpoint)

app.listen(port, () =>  console.log(`running server on port ${port}`))