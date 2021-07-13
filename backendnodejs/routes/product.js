const express = require('express')
const db = require('../db')
const utils = require('../utils')
const mailer = require('../mailer')

const router = express.Router()

router.get('/list', (request, response) => {
  console.log('GET / is called')
  const statement = `select * from product`
  db.query(statement, (error, products) => {
    response.send(utils.sendResult(error, products))
  })
})

router.post('/',(request, response)=>{
    console.log(request.body)
      const{title, description, price, category} = request.body
      const statement = `insert into product(title, description, price, category)
       values('${title}','${description}','${price}','${category}')`
       db.query(statement,(error,dbResult)=>{
          if(error){
               //error occured
               response.send(utils.sendError(error))
               console.log(error)
           }else{
            const subject = `Welcome to Motion Soft Pvt Ltd`
            const body = `
            <h1>Welcome to Motion Soft Pvt Ltd</h1>
            <h2>Registration Successful </h2>
            <h2>Pls Login</h2>`
            mailer.sendEmail('akash9753@gmail.com',subject,body, (emailError,info) =>{
                response.send(utils.sendSuccess(dbResult))
            })
        }
    })
})

module.exports = router