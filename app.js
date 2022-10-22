const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

require('./config/mongoose')
const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

const Url = require('./models/url')

app.get('/', (req, res) => {
  Url.find()
    .lean()
    .then(urls => res.render('index', { urls }))
    .catch(error => console.error(error))
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
