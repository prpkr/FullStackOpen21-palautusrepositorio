const User = require('../models/user')

const dummy = (blogs) => {
    console.log(blogs)
    return 1
}


const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return null
    }

    let favoredBlog = blogs.reduce((prev, current) => 
    {
        return (prev.likes > current.likes) ? prev : current
    })

    const { title, author, likes } = favoredBlog
    const filteredBlog = { title, author, likes}
    return filteredBlog
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    usersInDb
}