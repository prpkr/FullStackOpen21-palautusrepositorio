const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: 'React patterns',
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 7,
    },
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
    },
    {
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
        likes: 12,
    },
    {
        title: 'First class tests',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
        likes: 10,
    },
    {
        title: 'TDD harms architecture',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
        likes: 0,
    },
    {
        title: 'Type wars',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
        likes: 2,
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()})

describe(' get all api', () =>  {

    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('correct number of blogs are returned', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(2)
    })

    test('blogs have an id property', async () => {
        const response = await api.get('/api/blogs')
        response.body.forEach(blog => {
            expect(blog.id).toBeDefined()
        })
    })
})

describe('post api', () => {
    test('HTTP POST increases number of blogs by one', async () => {
        let response = await api.get('/api/blogs')
        let currentBlogsLength = response.body.length
    
        await api.post('/api/blogs').send(initialBlogs[3])

        response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(currentBlogsLength + 1)
    })
})

describe('delete a blog', () => {
    test('successfully deletes a specific blog', async () => {
        const initialBlogs = await api.get('/api/blogs')
        const blogToDelete = initialBlogs.body[0]
  
        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .expect(204)
  
        const finalBlogs = await api.get('/api/blogs')
        expect(finalBlogs.body.length).toBe(initialBlogs.body.length - 1)
  
        const ids = finalBlogs.body.map(blog => blog.id)
        expect(ids).not.toContain(blogToDelete.id)
    })
})
  


afterAll(async () => {
    await mongoose.connection.close()
})