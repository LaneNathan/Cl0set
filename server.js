require('dotenv').config()
const express = require('express');

const sequelize = require('./config/connection');
const routes = require('./controllers')

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(routes)
// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
