//Env. variables
require('dotenv').config()

let password = process.env.PASSWORD
let MONGODB_URI = process.env.DB_URL.replace('<password>', password)
let PORT = process.env.PORT

module.exports = {
    MONGODB_URI,
    PORT
  }