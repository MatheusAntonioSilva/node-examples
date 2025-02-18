const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://teste:teste@cluster0.dlvlz.mongodb.net/logs?retryWrites=true&w=majority'
const conn = mongoose.createConnection(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

const logSchema = new mongoose.Schema({ message: String })

module.exports = conn.model('developments', logSchema)
