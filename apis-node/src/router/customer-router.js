const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customer-controller')

router.post('/', customerController.create)

router.get('/', customerController.index)

router.get('/:customerId', customerController.show)

router.put('/:customerId', customerController.update)

router.delete('/:customerId', customerController.destroy)

module.exports = router
