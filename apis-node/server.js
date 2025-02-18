const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000
const indexRouter = require('./src/router/index-router')
const logRouter = require('./src/router/log-router')
const productRouter = require('./src/router/product-router')
const customerRouter = require('./src/router/customer-router')
const authRouter = require('./src/router/auth-router')

const connectionString = 'mongodb+srv://teste:teste@cluster0.dlvlz.mongodb.net/bdposnode?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.set('trust proxy', true)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', indexRouter)
app.use('/api/products/', productRouter)
app.use('/api/customers/', customerRouter)
app.use('/api/auths/', authRouter)
app.use('/api/logs/', logRouter)

app.listen(port, () => {
  console.log("server is up and running...")
})