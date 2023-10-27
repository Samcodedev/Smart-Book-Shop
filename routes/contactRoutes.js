const express = require('express')
const router = express.Router();
// importation of all the Contact route functions
  module.exports = {getBook, postBook, getBook2, putBook, deleteBook} = require('../controllers/contactController');
const validation = require('../middleware/validateToken');


// function routing
router.use('/:id').get(getBook2);
router.use(validation)
router.route('/').get(getBook).post(postBook) // routing to the GET and POST function
router.route('/:id').put(putBook).delete(deleteBook) // routing to the GET, PUT and DELETE function


module.exports = router




// router.route('/').get(getContact)

// router.route('/').post(postContact)

// router.route('/:id').get(getContact2)

// router.route('/:id').put(putContact)

// router.route('/:id').delete(deleteContact)
