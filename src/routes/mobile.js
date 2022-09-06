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
    const { sku } = request.params

    let array_result = []

    const result = products.filter((element) => {
        if(element.sku == sku){
            let v_sku = element.sku
            let nombre = element.nombre
            let precio = element.precio
            let url = element.url
            let marca = element.marca
            let descripcion = element.descripcion
            let iva = element.iva
            let descuento = element.descuento

            let precio_final = precio - (precio * descuento) + (precio * iva)

            const showProductMobile = {v_sku, nombre, precio, url, marca, descripcion, iva, descuento, precio_final}
            array_result.push(showProductMobile)

    
        }
    })
    response.json(array_result)
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