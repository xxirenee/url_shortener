const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const generateUrl = require('../../utilities/shortURL')
const port = 3000
const mainUrl = `http://localhost:${port}/`

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  let nonURL = !req.body.url

  if (!req.body.url) {
    return res.render('index', { nonURL })
  }

  URL.find({ url: req.body.url })
    .lean()
    .then(urls => {
      let inputUrl = urls.find(url => url.originUrl === req.body.url)
      if (inputUrl) { //if already have this data
        const short = `${mainUrl}${inputUrl.shortenUrl}`
        return res.render('index', { originUrl: req.body.url, short, inputUrl })
      } else {

        const shortenUrl = generateUrl()
        URL.create({ originUrl: req.body.url, shortenUrl })
          .then(() => {
            const short = `${mainUrl}${shortenUrl}`
            return res.render('index', { originUrl: req.body.url, short, nonURL })
          })
      }
    })
    .catch(error => console.log(error))
})

router.get('/:shortenUrl', (req, res) => {
  const { shortenUrl } = req.params
  // check if there is shorturl in data, if not return error msg
  URL.findOne({ shortenUrl })
    .lean()
    .then((data) => {
      if (!data) {
        return res.render('error', { errorLink: mainUrl + shortenUrl })
      } else {
        // redirect to originUrl
        res.redirect(data.originUrl)
      }
    })
    .catch((error) => console.log(error))
})

module.exports = router
