
function generateURL() {
  let shortURL = ''
    // define all possible characters
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = numbers + lowerCaseLetters + upperCaseLetters
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    const slectedCharact = collection[randomIndex]
    shortURL += slectedCharact
  }
  return shortURL
}

module.exports = generateURL
