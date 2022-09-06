const { Router } = require('express')
const { isString } = require('underscore')
const router = Router()
const _ = require('underscore')
const fs = require('fs')

const products = require('../Productos.json')
const purchase_orders = require('../Ordenes.json')

//Endpoint Listar productos
router.get('/producto', (request, response) => {
    let array_result = []
    _.each(products, (product, i) => {
        let sku = product.sku
        let nombre = product.nombre
        let url = product.url
        let marca = product.marca
        let inventario = product.inventario

        let precio = product.precio
        let descuento = product.descuento
        let iva = product.iva

        let precio_final = precio - (precio * descuento) + (precio * iva)

        if(inventario > 0){
            const showProductsM = { sku, nombre, url, marca, precio_final}
            array_result.push(showProductsM) 
        }
    })
    response.json(array_result)
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