const express = require('express')
const router = express.Router()
const productController = require('../controllers/product-controller')
const authService = require('../services/auth-service')

router.post('/', authService.authorize, productController.create)

router.get('/', authService.authorize, productController.index)

router.get('/:productId', authService.authorize, productController.show)

router.put('/:productId', authService.authorize, productController.update)

router.delete('/:productId', productController.destroy)

module.exports = router
