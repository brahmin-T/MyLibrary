const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('author/index')
})


// new author routes

route.get('/new1', (req,res)=>{
    res.render('author/new1')
})
// create Author routes

route.post('/', (req,res)=>{
    res.send('create')
})

module.exports = route;