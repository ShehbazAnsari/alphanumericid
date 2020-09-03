function alphanumericid(length) {

  let alphaNumeric, generateNumber, randomNumber, i, alphaNumericId = ''
  if (length === undefined || length === null) {
    throw `Parameter is empty, kindly pass a number`
  }
  if (length.shortid) {
    alphaNumeric = 'abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (i = 0; i < 5; i++) {

      generateNumber = Math.floor(Math.random() * alphaNumeric.length + 1)
      randomNumber = alphaNumeric.charAt(generateNumber)
      alphaNumericId += randomNumber

    }
  }
  else if (length.longid) {
    alphaNumeric = 'abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (i = 0; i < 15; i++) {

      generateNumber = Math.floor(Math.random() * alphaNumeric.length + 1)
      randomNumber = alphaNumeric.charAt(generateNumber)
      alphaNumericId += randomNumber

    }
  }
  else {
    alphaNumeric = 'abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (i = 0; i < length; i++) {

      generateNumber = Math.floor(Math.random() * alphaNumeric.length + 1)
      randomNumber = alphaNumeric.charAt(generateNumber)
      alphaNumericId += randomNumber

    }
  }
  return alphaNumericId
}
module.exports.alphanumericid = alphanumericid
