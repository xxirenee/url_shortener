const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

require('./config/mongoose')
const app = express()
const port = 3000
const routes = require('./routes')

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)



// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
