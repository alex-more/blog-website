const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const mainRouter = require('./routes/main')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

// Connect to MongoDB Atlas
const dbURI = 'mongodb+srv://morax:e0qmWtnVjIaYMqt7@blogcluster.wc0km.mongodb.net/blog-db?retryWrites=true&w=majority'

mongoose.connect(dbURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
    }).then((result) => app.listen(5000))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/styles', express.static('styles'))

app.use('/assets', express.static('assets'))

app.use('/', mainRouter)
app.use('/blog', articleRouter)