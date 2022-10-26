function generateURL(length=5) {
  let shortURL = ''
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const collection = numbers + lowerCaseLetters + upperCaseLetters
  const randomText = collection.split('')
  for (let i = 0; i < length; i++) {
    shortURL += randomText[Math.floor(Math.random() * (randomText.length - 1))]
  }
  return shortURL
}

module.exports = generateURL
