const express = require('express')
const Article = require('./../models/article')
const router = express.Router()


router.get('/about', async (req, res) => {
    res.render('about')
})

router.get('/projects', async (req, res) => {
    res.render('projects')
})

router.get('/blog', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/blog', { articles: articles })
})

router.get('/contact', async (req, res) => {
    res.render('contact')
})

module.exports = router