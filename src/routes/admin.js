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
    const { sku } = request.params;

    _.each(products, (product, i) => {
        if(product.sku == sku){
            products.splice(i, 1)

            const delete_process = JSON.stringify(products)
            fs.writeFileSync('src/Productos.json', delete_process, 'utf-8', (error) => {
                if(error){
                    console.log(`Error: ${error}`)
                }
            })

            response.json('Product successfully removed')
        }else{
            response.json('The product is not registered')
        }
    })
})

//Endpoint Consultar órdenes de compra
router.get('/ordenes', (request, response) => {
    
})



module.exports = router