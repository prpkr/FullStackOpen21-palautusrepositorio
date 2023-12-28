require('dotenv').config()
const mongoose = require('mongoose')

const password = process.env.PASSWORD
const url = process.env.TEST_DB_URI.replace('<password>', password)
mongoose.connect(url)

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
    title: 'Example Blog 2',
    author: 'Jane Doe',
    url: 'http://example2.com',
    likes: 2
})

blog.save().then(() => {
    console.log('blog saved')
    mongoose.connection.close()
})
