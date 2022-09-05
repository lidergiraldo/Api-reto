const { Router, request } = require('express')
const { result, isString, isNumber } = require('underscore')
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
    let array_result = []
    let array_productos_final = []
    _.each(purchase_orders, (order, i) => {
        let id = order.id
        let nombre = order.nombre
        let apellido = order.apellido
        let total = order.total
        let array_productos = order.productos


        let info_product = {}
        _.each(array_productos, (producto, i) => {
            let prod = products.filter((element) => {
                if(element.sku = array_productos[i]){
                    let sku = element.sku
                    let nombre = element.nombre
                    let marca = element.url
                    let url = element.url

                    info_product = { sku, nombre, marca, url }
                        
                }
                
            })   
            const showOrders = { id, nombre, apellido, total, info_product}
            array_result.push(showOrders)
        })

    })
    response.json(array_result)
})



module.exports = router