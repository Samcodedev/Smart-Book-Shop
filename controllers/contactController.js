const asyncHandler = require('express-async-handler')
const bookModel = require('../models/contactModel')
 
 //@desk GET all contacts
 //@route GET /api/contacts
 //@access public

 const getBook = asyncHandler(async (req, res) =>{
    const books = await bookModel.find({user_id: req.users._id})
    res.status(200).json(books);
})

 //@desk POST all contacts
 //@route POST /api/contacts
 //@access public

 const postBook = asyncHandler(async (req, res) =>{
    const {title, author, isbn, genre, publishedYear, description, available} = req.body
    if(!title || !author || !isbn || !genre || !publishedYear || !description || !available){
        res.status(400)
        throw new Error('All field are mandatory !')
    }
    const books = await bookModel.create({
      title, 
      author, 
      isbn, 
      genre, 
      publishedYear, 
      description, 
      available,
      user_id: req.users._id
    })

    res.status(200).json(books);
})


 //@desk GET all contacts   
 //@route GET /api/contacts
 //@access public

 const getBook2 = asyncHandler(async (req, res) =>{
    const books = await bookModel.find({isbn: req.params.id})
    if(!books){
        res.status(400)
        throw new Error('book not found')
    }
    res.status(200).json(books);
})

 //@desk PUT all contacts
 //@route PUT /api/contacts 
 //@access public

 const putBook = asyncHandler(async (req, res) =>{
    const books = await bookModel.find({isbn: req.params.id})
    if(!books){
        res.status(404)
        throw new Error('Contact not found')
    }
    if(books.user_id.toString() !== req.users._id){
        res.status(403)
        throw new Error('User do not have permission to update this book')
    }
    const updateBook = await bookModel.findAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )
    res.status(200).json({updateBook});
})

//@desk DELETE all contacts
//@route DELETE /api/contacts
//@access public 

const deleteBook = asyncHandler(async (req, res) =>{
    const books = await bookModel.find({isbn: req.params.id})
    if(!books){
        res.status(404)
        throw new Error('book not found')
    }
    if(books.user_id.toString() !== req.users._id){
        res.status(403)
        throw new Error('User do not have permission to delete this book')
    } 
    const deleteBook = await bookModel.findAndDelete(
        req.params.id
    )
    res.status(200).json(deleteBook);
})

module.exports = {getBook, postBook, getBook2, putBook, deleteBook}