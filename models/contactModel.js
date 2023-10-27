const mongoose = require('mongoose')

const bookschema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'users'
    },
    title: {
        type: String,
        require: [true, 'Please add the book title'],
    },
    author: {
        type: String,
        require: [true, 'Please add the book author'],
    },
    isbn: {
        type: String,
        require: [true, 'Please add the isbn code'],
    },
    genre: {
        type: String,
        require: [true, 'Please add the book genre'],
    },
    publishedYear: {
        type: String,
        require: [true, 'Please add the year the book is been published'],
    },
    description: {
        type: String,
        require: [true, 'Please add a description about the book'],
    },
    available: {
        type: Boolean,
        require: [true, 'Please add if the book is available'],
    }
},
{
    timestamps: true,
}) 

module.exports = mongoose.model('bookModel', bookschema)

/*
{
    "username": "samcode",
    "email": "samcode@gmail.com",
    "password": "123456"
}
*/


/* 
const postContact = asyncHandler( async (res, req) =>{
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('fill in all input')
    }
    const createUser = await contact.create({
        name,
        email,
        phone
    })
    res.status(200).json((createUser))
})
*/