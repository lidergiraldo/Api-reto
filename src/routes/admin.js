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
    const { sku } = request.params
    
    const result = products.filter((element) => element.sku == sku)
    response.json(result)
})

//Endpoint Insertar producto
router.post('/producto', (request, response) => {
    const { sku, nombre, precio, url, marca, descripcion, iva, descuento, inventario} = request.body
    
    //Validación de datos de entrada
    if(!sku || !isString(sku)){
        response.status(403)
        response.send({error: 'sku invalido!'})
    }

    _.each(products, (product, i) => {
        if(product.sku == sku){
            response.status(403)
            response.send({error: 'El sku ya ha sido registrado'})
        }
    })

    if(!nombre || !isString(nombre)){
        response.status(403)
        response.send({error: 'nombre invalido!'})
    }
    if(!precio || !isNumber(precio)){
        response.status(403)
        response.send({error: 'precio invalido!'})
    }
    if(!url || !isString(url)){
        response.status(403)
        response.send({error: 'url invalida!'})
    }
    if(!marca || !isString(marca)){
        response.status(403)
        response.send({error: 'marca invalida!'})
    }
    if(!descripcion || !isString(descripcion)){
        response.status(403)
        response.send({error: 'descripcion invalida!'})
    }
    if(!iva || !isNumber(iva)){
        response.status(403)
        response.send({error: 'iva invalido!'})
    }
    if(!descuento || !isNumber(descuento)){
        response.status(403)
        response.send({error: 'descuento invalido!'})
    }
    if(!inventario || !isNumber(inventario)){
        response.status(403)
        response.send({error: 'Registro de inventario invalido!'})
    }

    //Asignar fecha actual
    let date = new Date()
    let day = `${(date.getDate())}`.padStart(2,'0')
    let month = `${(date.getMonth()+1)}`.padStart(2,'0')
    let year = date.getFullYear()
    const fecha_actual = `${year}-${month}-${day}`

    const insertProductNew = { ...request.body, fecha_actual }
    products.push(insertProductNew)

    //Insertar nuevo producto en Productos.json
    const product_process = JSON.stringify(products)
    fs.writeFileSync('src/Productos.json', product_process, (error) => {
        if(error){
            console.log(`Error: ${error}`)
        }
    })
    response.json('Saved Product')
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