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

//Endpoint Resumen de compra
router.post('/resumen', (request, response) => {

})

//Endpoint Realizar compra
router.post('/comprar', (request, response) => {
    const { nombre, apellido, array_compras } = request.body

    let total = 0

    if(!nombre || !isString(nombre)){
        response.status(403)
        response.send({error: 'Nombre invalido!'})
    }
    if(!apellido || !isString(apellido)){
        response.status(403)
        response.send({error: 'Apellido invalido!'})
    }

    let id = purchase_orders.length + 1

    _.each(array_compras, (array_c, i) => {
        let search_valor_total = products.filter((element) => {
            if(element.sku == array_compras[i]){
                let precio = element.precio
                let descuento = element.descuento
                let iva = element.iva

                let precio_final = precio - (precio * descuento) + (precio * iva)
                total += precio_final
            }
        })
    })


    const newOrder = {id, nombre, apellido, array_compras, total}
    purchase_orders.push(newOrder)

    const order_process = JSON.stringify(purchase_orders)
    fs.writeFileSync('src/Ordenes.json', order_process, (error) => {
        if(error){
            console.log(`Error: ${error}`)
        }
    })
    response.json(`Successfull purchase`)
})
module.exports = router