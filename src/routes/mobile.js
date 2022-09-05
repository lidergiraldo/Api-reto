const { Router } = require('express')
const { isString } = require('underscore')
const router = Router()
const _ = require('underscore')
const fs = require('fs')

const products = require('../Productos.json')
const purchase_orders = require('../Ordenes.json')

//Endpoint Listar productos
router.get('/producto', (request, response) => {

})
//Endpoint Consultar producto
router.get('/producto/:sku', (request, response) => {

})

//Endpoint 
router.post('/resumen', (request, response) => {

})

//Endpoint 
router.post('/comprar', (request, response) => {

})
module.exports = router