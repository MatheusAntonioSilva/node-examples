const express = require('express')
const router = express.Router()
const Product = require('../app/models/product')
const Category = require('../app/models/category')
const product = require('../app/models/product')

router.post('/', function(req, res) {
  const category = new Category()
  category.description = req.body.category.description

  category.save(function(error) {
    if(error) { res.send('Erro ao tentar salvar um novo produto', error) }
  })
  
  const product = new Product()
  product.name = req.body.name
  product.price = req.body.price
  product.description = req.body.description
  product.category = category

  product.save(function(error) {
    if(error) { res.send('Erro ao tentar salvar um novo produto', error) }

    res.status(201).json({ message: 'Produto inserido com sucesso' })
  })
})

router.get('/', function(_req, res) {
  Product.find(function(error, prods) {
    if(error) { res.send(error) }
    
    res.status(200).json({ data: prods })
  })
})

router.get('/:productId', function(req, res) {
  const id = req.params.productId
  Product.findById(id, function(error, prod) {
    if(error) { res.status(500).json({ message: 'Ação não permitida' }) } 
    if(prod === null) { res.status(403).json({ message: 'Recurso não encontrado' }) }
    
    res.status(200).json(prod)
  })
})


router.put('/:productId', function(req, res) {
  const id = req.params.productId
  Product.findById(id, function(error, prod) {
    if(error) { res.status(500).json({ message: 'Ação não permitida' }) } 
    if(prod === null) { res.status(403).json({ message: 'Recurso não encontrado' }) }
    
    prod.name = req.body.name
    prod.price = req.body.price
    prod.description = req.body.description


    prod.save(function(error) {
      if(error) { res.send('Erro ao tentar salvar um novo produto', error) }
  
      res.status(201).json(prod)
    })
  })
})

router.delete('/:productId', function(req, res) {
  const id = req.params.productId
  Product.findByIdAndRemove(id, function(error, prod) {
    if(error) { res.status(500).json({ message: 'Ação não permitida' }) } 
    if(prod === null) { res.status(403).json({ message: 'Recurso não encontrado' }) }
    
    res.status(201).json({ message: 'Produto excluido com sucesso'})
  })
})
module.exports = router
