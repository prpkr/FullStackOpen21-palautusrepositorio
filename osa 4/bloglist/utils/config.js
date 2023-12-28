//Env. variables
require('dotenv').config()

let password = process.env.PASSWORD
let PORT = process.env.PORT
const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_DB_URI.replace('<password>', password)
    : process.env.DB_URI.replace('<password>', password)

module.exports = {
    MONGODB_URI,
    PORT
}

