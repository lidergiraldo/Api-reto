const { Router, request } = require('express')
const { result, isString, isNumber } = require('underscore')
const router = Router()
const _ = require('underscore')
const fs = require('fs')

const products = require('../Productos.json')
const purchase_orders = require('../Ordenes.json')

//Endpoint Listar productos
router.get('/producto', (request, response) => {
    let arry_result = []
    _.each(products, (product, i) => {
        let sku = product.sku
        let nombre = product.nombre
        let precio = product.precio
        let url = product.url
        let marca = product.marca
        let iva = product.iva
        let inventario = product.inventario

        const showProducts = {sku, nombre, precio, url, marca, iva, inventario}
        arry_result.push(showProducts)

    })
    response.json(arry_result)
})

//Endpoint Consultar producto
router.get('/producto/:sku', (request, response) => {
    
})

//Endpoint Insertar producto
router.post('/producto', (request, response) => {
    
})

//Endpoint Actualizar producto
router.put('/producto/:sku', (request, response) => {
    
})

//Endpoint Eliminar producto
router.delete('/producto/:sku', (request, response) => {
    
})

//Endpoint Consultar órdenes de compra
router.get('/ordenes', (request, response) => {
    
})



module.exports = router