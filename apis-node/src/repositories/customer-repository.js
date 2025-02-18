const Customer = require('../app/models/customer')
const jwt = require('jsonwebtoken')

require('dotenv-safe').config()

exports.create = async(data) => {
  const customer = new Customer()

  customer.name = data.name
  customer.email = data.email
  customer.password = customer.generateHash(data.password)

  return await customer.save()
}

exports.all = async() => { return await Customer.find() }

exports.findById = async(id) => { return await Customer.findById(id) }

exports.update = async(id, data) => { return await Customer.findOneAndUpdate(id, data, { new: true }) }

exports.delete = async(id) => { return await Customer.findByIdAndRemove(id) }

exports.login = async(email, password) => {
  const customer = await Customer.findOne({ email: email })

  const id = customer._id

  if(customer && customer.validPassword(password)) {
    console.log('isss')

    return jwt.sign({ id }, process.env.SECRET, { expiresIn: 60 })
  } else {
    throw ({ status: 403, code: 'Bad Request', message: 'Usuário não encontrado!' })
  }

}
