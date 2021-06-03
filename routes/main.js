const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/blog', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/blog', { articles: articles })
})

module.exports = router