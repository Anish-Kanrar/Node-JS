const express = require('express')
const app = express()
const fs = require('fs')
const port = 4000

//middleware 
//app.use(express.static('public'))

/*
//middleware 1 - Logger for our application
app.use((req, res, next) =>{
  console.log('m1')
  // res.send("Hacked By Middleware1")
  next()
})
*/

app.use((req, res, next) =>{
  console.log(`${Date.now()} is a ${req.method}`)
 
  next()
})

//middleware 2
app.use((req, res, next) =>{
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res) => {
  res.send('Hello About!')
})

app.get('/contact',(req,res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})