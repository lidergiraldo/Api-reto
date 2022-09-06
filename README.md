# RETO DESARROLLADORES - OMNI.PRO

![](https://img.shields.io/badge/build-passing-green) ![](https://img.shields.io/badge/express-4.18.1-blue) ![](https://img.shields.io/badge/morgan-1.10.0-blue) ![](https://img.shields.io/badge/underscore-1.13.4-blue) ![](https://img.shields.io/badge/nodemon-2.0.19-blue) 

Esta API se encarga del procesamiento de la información relacionada a la gestión de una tienda de ropa; es decir, permite controlar temas administrativos como ver, insertar, actualizar o eliminar productos y consultar las ordenes de compra, desde el lado del cliente permite consultar productos, ver resúmenes de compras y realizar compras.

Este proyecto fue desarollado en Javascript con [Node.js](https://nodejs.org/es/)

## Instalación
- Forma 1: Dar clic en Code y luego en Donwload Zip

- Forma 2: Crear una carpeta, ingresar a su git bash y ejecutar
`$ git clone https://github.com/lidergiraldo/Api-reto.git`

## Ejecución
Una vez posicionados en el proyecto, abrimos una terminal:
- Ejecución de Producción:
`$ npm start`
- Ejecución de Desarrollo:
`$ npm run dev`

## Ramas del proyecto
Para el desarrollo de esta API REST se creo una rama para cada uno de los endpoints que la conforman y una vez validado el funcionamiento de cada una se unieron en la rama main

### Ramas de la aplicación web - administrador

- **Endpoint Listar productos -** admin/listing-products
- **Endpoint Consultar producto -** admin/consult-product
- **Endpoint Insertar productos -** admin/insert-product
- **Endpoint Actualizar productos -** admin/update-product
- **Endpoint Eliminar productos -** admin/delete-product
- **Endpoint Consultar órdenes de compra -** admin/consult-purchase-orders

### Ramas de la aplicación móvil - clientes

- **Endpoint Listar productos -** mobile/listing-products
- **Endpoint Consultar producto -** mobile/consult-product
- **Endpoint Resumen de compra -** mobile/purchase-summary
- **Endpoint Realizar compra -** mobile/make-purchase
