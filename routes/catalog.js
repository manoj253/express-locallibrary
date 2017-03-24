var express = require('express');
var router = express.Router();

//Require controller modules
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

// Book ROUTE

//GET catalog home page
router.get('/',book_controller.index);

// GET request for creating a book.
router.get('/book/create',book_controller.book_create_get);

//POST request for creating Book
router.post('/book/create',book_controller.book_create_post);

//GET request for delete Book 
router.get('/book/:id/delete',book_controller.book_delete_get);

//POST request for deleting Book 
router.post('/book/:id/delete',book_controller.book_delete_post);

//GET request for update book
router.get('/book/:id/update',book_controller.book_update_get);

//POST request for updating Book
router.post('/book/:id/update',book_controller.book_update_post);

//GET request for one Book
router.get('/book/:id',book_controller.book_detail);

//GET request for list of all boook items 
router.get('/books',book_controller.book_list);

//Author ROUTES

//GET request for creating a Author
router.get('/author/create',author_controller.author_create_get);

//POST request for creating author
router.post('/author/create',author_controller.author_create_post);

//GET request for deleting Author
router.get('/author/:id/delete',author_controller.author_delete_get);

//POST request for deleting Author
router.post('/author/:id/delete',author_controller.author_delete_post);

//GET request for updating author 
router.get('/author/:id/update',author_controller.author_update_get);

//POST request for updating Author
router.post('/author/:id/update',author_controller.author_update_post);

//GET request for one author
router.get('/author:id',author_controller.author_detail);

//GET request for list of all authors 
router.get('/authors',author_controller.author_list);

//Genre ROUTES

//GET request for creating a Genre
router.get('/genre/create',genre_controller.genre_create_get);

//POST request for creating Genre
router.post('/genre/create',genre_controller.genre_create_post);

//GET request for deleting Genre
router.get('/genre/:id/delete',genre_controller.genre_delete_get);

//POST request for deleting Genre
router.post('/genre/:id/delete',genre_controller.genre_delete_post);

//GET request for updating Genre 
router.get('/genre/:id/update',genre_controller.genre_update_get);

//POST request for updating Genre
router.post('/genre/:id/update',genre_controller.genre_update_post);

//GET request for one Genre
router.get('/genre:id',genre_controller.genre_detail);

//GET request for list of all Genres 
router.get('/genres',genre_controller.genre_list);

//BOOKINSTANCE ROUTES

//GET request for creating a BOOKINSTANCE
router.get('/bookinstance/create',book_instance_controller.bookinstance_create_get);

//POST request for creating BOOKINSTANCE
router.post('/bookinstance/create',book_instance_controller.bookinstance_create_post);

//GET request for deleting BOOKINSTANCE
router.get('/bookinstance/:id/delete',book_instance_controller.bookinstance_delete_get);

//POST request for deleting BOOKINSTANCE
router.post('/bookinstance/:id/delete',book_instance_controller.bookinstance_delete_post);

//GET request for updating BOOKINSTANCE
router.get('/bookinstance/:id/update',book_instance_controller.bookinstance_update_get);

//POST request for updating BOOKINSTANCE
router.post('/bookinstance/:id/update',book_instance_controller.bookinstance_update_post);

//GET request for one BOOKINSTANCE
router.get('/bookinstance:id',book_instance_controller.bookinstance_detail);

//GET request for list of allBOOKINSTANCE
router.get('/bookinstances',book_instance_controller.bookinstance_list);

module.exports = router;
