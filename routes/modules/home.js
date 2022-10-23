const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const shortURL = require('../../utilities/shortURL')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
