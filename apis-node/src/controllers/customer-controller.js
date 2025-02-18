const customerRepository = require('../repositories/customer-repository')
const logRepository = require('../repositories/log-repository')

exports.create = async(req, res) => {
  try {
    const customer = await customerRepository.create(req.body)
    await logRepository.create({ message: "Cliente cadastrado pelo IP: " + req.ip })

    res.status(201).send(customer)
  } catch(error) { res.status(500).send({ message: 'Ação não permitida' }) }
}

exports.index = async(_req, res) => {
  try { 
    let customers = await customerRepository.all()
    res.status(200).send({ count: customers.length, data: customers })
  } catch(error) { res.status(500).send({ message: 'Ação não permitida' }) }
}

exports.show = async(req, res) => {
  try { 
    const customer = await customerRepository.findById(req.params.customerId)
    if (customer) { 
      res.status(200).send(customer) 
    } else {
      res.status(403).send({ message: 'Cliente não encotrado' })
    }
  } catch(error) {
    res.status(500).json({ message: 'Ação não permitida' })
  }
}

exports.update = async(req, res) => {
  try { 
    const customer = await customerRepository.update(req.params.customerId, req.body)
    await logRepository.create({ message: "Cliente alterado pelo IP: " + req.ip })

    res.status(200).send(customer)
  } catch(error) {
    res.status(500).send({ message: 'Ação não permitida' })
  }
}

exports.destroy = async(req, res) => {
  try { 
    await customerRepository.delete(req.params.customerId);
    await logRepository.create({ message: "Cliente excluido pelo IP: " + req.ip })

    res.status(201).json({ message: 'Cliente excluido com sucesso'})
  } catch(error) {
    res.status(500).send({ message: 'Ação não permitida' })
  }
}