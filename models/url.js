const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
  originUrl: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', urlSchema)
