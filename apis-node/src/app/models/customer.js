const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema
const customerSchema = new Schema({
  name: {
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true,
    unique: true
  },

  password:  {
    type: String,
    require: true
  }
})

customerSchema.methods.generateHash = function(password) { 
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8, null))
}

customerSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

mongoose.set('useCreateIndex', true)
customerSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Customer', customerSchema)
