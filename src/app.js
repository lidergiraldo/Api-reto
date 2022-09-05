const express = require('express')
const app = express()
const morgan = require('morgan')
const { urlencoded } = require('express')

//Settings
app.set('json spaces', 2)

//Middlewares
app.use(morgan('dev'))
app.use(urlencoded({extended: false}))
app.use(express.json())

//Routes
app.use('/admin/', require('./routes/admin'))
app.use(require('./routes/mobile'))

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
