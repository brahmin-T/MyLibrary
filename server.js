if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const authorRouter = require('./routes/author')

app.set('view engine', 'ejs')
app.set('views', __dirname +'/views')
app.use(express.static('public'))


app.use('/', indexRouter)
app.use('/author', authorRouter)

mongoose.connect(process.env.DATABASE_URL,{
     useNewUrlParser:true,
     useFindAndModify:true,
     useUnifiedTopology:true
})
const db = mongoose.connection;
db.on('error',err=> console.log('error'))
db.once('open', ()=>console.log('connected to mongoose'))


app.listen(process.env.PORT || 3000);