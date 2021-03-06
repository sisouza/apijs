const { Router } = require('express');
const UserController = require("../controllers/UserController");
const GenreController = require("../controllers/GenreController");
const MovieController = require("../controllers/MovieController");

const router = Router();

//initial
router.get('/', (req, res) => res.send('Welcome'));
//user routes
router.post('/user', UserController.create);
router.get('/user', UserController.getAll);
router.get('/user/:id', UserController.getById);
router.put('/user/edit/:id', UserController.update);
router.delete('/user/:id', UserController.remove);
//genre routes
router.post('/genre', GenreController.create);
router.get('/genre', GenreController.getAll);
router.get('/genre/:id', GenreController.getById);
router.put('/genre/edit/:id', GenreController.update);
router.delete('/genre/:id', GenreController.remove);
//movies routes
router.post('/movie', MovieController.create);
router.get('/movie', MovieController.getAll);
router.get('/movie/:id', MovieController.getById);
router.put('/movie/edit/:id', MovieController.update);
router.delete('/movie/:id', MovieController.remove);


module.exports = router;