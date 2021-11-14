const { Router } = require('express');
const UserController = require("../controllers/UserController");
//const MovieController = require("../controllers/MovieController");

const router = Router();

//initial
router.get('/', (req, res) => res.send('Welcome'));
//user routes
router.post('/user', UserController.create);
router.get('/user', UserController.getAll);
router.get('/user/:id', UserController.getById);
router.put('/user/edit/:id', UserController.update);
router.delete('/user/:id', UserController.remove);
//movies routes
//genre routes


module.exports = router;