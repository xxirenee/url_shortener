const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
  originUrl: {
    type: String,
    required: true
  },
  shorten: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Url', urlSchema)
