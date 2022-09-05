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
    const { array_prod } = request.body

    let array_result = []
    let obj_produ = {}
    let valor_compra = 0
    _.each(array_prod, (array_p, i) => {
        let search_prod = products.filter((element) =>{
            if(element.sku == array_prod[i]){
                let sku = element.sku
                let nombre = element.nombre
                let precio = element.precio
                let descuento = element.descuento
                let iva = element.iva

                let precio_final_product = precio - (precio * descuento) + (precio * iva)
                valor_compra += precio_final_product

                obj_produ = { sku, nombre, precio_final_product }
            }
        })
        array_result.push(obj_produ)
    })
    const showResume = { valor_compra }
    array_result.push(showResume)

    response.json(array_result)
})

//Endpoint 
router.post('/comprar', (request, response) => {

})
module.exports = router