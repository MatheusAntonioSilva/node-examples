const express = require('express')
const router = express.Router()

router.use(function(req, res, next){
  console.log("Interceptação pelo Middleware ok") //LOG, Validações, Autenticações
  next()
})

router.get('/', (req, res) => res.send("rota teste ok"))
module.exports = router