# Smart library App

## Programming Language Used
`Node.js`
`Javascript`

## Node Extension Used
`MongoDB`
`Express`

## Description
You can create a User by registering `API_LINK/users/register` \
and login an already registered user `API_LINK/users/login` \
After Login a user you will be sent a token which you will use as a validation to upload a book.

### Actions
CREATE USER (POST): `API_LINK/users/register` \
LOGIN USER (POST): `API_LINK/users/login` \
GET USER (GET): `API_LINK/users/` \
UPLOAD NEW BOOK (POST): `API_LINK/books/` \
GET ALL BOOK UPLOADED (GET): `API_LINK/books/` \
UPDATE A BOOK CREATED (PUT): `API_LINK/books/contact-id` \
GET A BOOK BY ISBN CODE (GET): `API_LINK/books/ISBN-CODE` \
DELETE A BOOK (DELETE): `API_LINK/books/contact-id` 

### Start Project
`npm run dev`