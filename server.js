const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const mainRouter = require('./routes/main')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
// const jwt = require('jsonwebtoken')

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('main')
})

app.use('/', mainRouter)
app.use('/blog', articleRouter)

app.listen(5000)