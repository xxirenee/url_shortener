const express = require('express')
const mongoose = require('mongoose')

require('./config/mongoose')
const app = express()
const port = 3000


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
