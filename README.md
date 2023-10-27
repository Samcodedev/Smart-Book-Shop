# Smart library App

## Programming Language Used
`Node.js`
`Javascript`

## Node Extension Used
`MongoDB`
`Express`

## Description
You can create a User by registering `http://Localhost:5001/user/register` \
and login an already registered user `http://Localhost:5001/user/login` \
After Login a user you will be sent a token which you will use as a validation to upload a book.

### Actions
CREATE USER (POST): `http://Localhost:5001/user/register` \
LOGIN USER (POST): `http://Localhost:5001/user/login` \
UPLOAD NEW BOOK (POST): `http://Localhost:5001/contact/` \
GET ALL BOOK UPLOADED (GET): `http://Localhost:5001/contact/` \
UPDATE A BOOK CREATED (PUT): `http://Localhost:5001/contact/contact-id` \
GET A BOOK BY ISBN CODE (GET): `http://Localhost:5001/contact/contact-id` \
DELETE A BOOK (DELETE): `http://Localhost:5001/contact/contact-id` 

### Start Project
`npm run dev`