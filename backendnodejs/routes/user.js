const express = require('express')

const db = require('../db')
const utils = require('../utils')
const mailer = require('../mailer')


const router = express.Router()

// /user/register
router.post('/register',(request, response)=>{
    console.log(request.body)
      const{fullname, address, email, phonenumber, age} = request.body
      const statement = `insert into user1(fullname, address,phonenumber,email,age)
       values('${fullname}','${address}','${phonenumber}','${email}','${age}')`
       db.query(statement,(error,dbResult)=>{
          if(error){
               //error occured
               response.send(utils.sendError(error))
           }else{
            const subject = `Welcome to Motion Soft Pvt Ltd`
            const body = `
            <h1>Welcome to Motion Soft Pvt Ltd</h1>
            <h2>Registration Successful </h2>
            <h2>Pls Login</h2>`
            mailer.sendEmail(email,subject,body, (emailError,info) =>{
                response.send(utils.sendSuccess(dbResult))
            })
         }
         })
})



module.exports = router