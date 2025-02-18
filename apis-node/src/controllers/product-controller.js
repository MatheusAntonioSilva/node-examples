const productRepository = require('../repositories/product-repository')
const logRepository = require('../repositories/log-repository')

exports.create = async(req, res) => {
  try {
    const product = await productRepository.create(req.body)
    await logRepository.create({ message: "Produto criado pelo IP: " + req.ip })

    res.status(201).send(product)
  } catch(error) {
    res.status(500).send({ message: 'Ação não permitida' })
  }
}

exports.index = async (_req, res) => { 
  try { 
    const products = await productRepository.all()
    res.status(200).send({ count: products.length, data: products })
  } catch(error) {
    res.status(500).send({ message: 'Ação não permitida' })
  }
}

exports.show = async(req, res) => {
  try { 
    const product = await productRepository.findById(req.params.productId)

    if (product) { 
      res.status(200).send(product) 
    } else {
      res.status(403).send({ message: 'Produto não encotrado' })
    }
  } catch(error) {
    res.status(500).send({ message: 'Ação não permitida' })
  }
}

exports.update = async(req, res) => {
  try { 
    const product = await productRepository.update(req.params.productId, req.body)
    await logRepository.create({ message: "Produto alterado pelo IP: " + req.ip })

    res.status(200).send(product)
  } catch(error) {
    res.status(500).send({ message: 'Ação não permitida' })
  }
}

exports.destroy = async(req, res) => {
  try { 
    await productRepository.delete(req.params.productId)
    await logRepository.create({ message: "Produto excluido pelo IP: " + req.ip })

    res.status(201).json({ message: 'Produto excluido com sucesso'})
  } catch(error) {
    res.status(500).send({ message: 'Ação não permitida' })
  }
}