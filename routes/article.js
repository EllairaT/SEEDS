const router = require('express').Router()
const Article = require('../models/articles')


router.get('/showData', async (req, res) => {
    const data = response.data

    Article.find({}) //find all
        .then((data) => { //function data()
            console.log('Data: ', data)
            res.json(data)
        }) 
        .catch((error) => {
            console.log('error: ', daerrorta)
        })
})
