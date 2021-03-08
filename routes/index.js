const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render("new")
})


// new author routes



module.exports = route;