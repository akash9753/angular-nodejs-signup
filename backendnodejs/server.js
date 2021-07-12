const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//list of routers
const routerUser = require('./routes/user1')
const routerProduct = require('./routes/product')

const app = express()

//expose the app
app.use(cors())

app.use(bodyParser.json())

//add the routers
app.use('/user1',routerUser)
app.use('/product',routerProduct)

app.listen(4000, '0.0.0.0', ()=>{
    console.log('server strated on port 4000')
})