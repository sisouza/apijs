const { Router } = require('express');
const UserController = require("../controllers/UserController");

const UserRouter = Router();

UserRouter.post('/user', UserController.create);
UserRouter.get('/user', UserController.getAll);
UserRouter.get('/user/:id', UserController.getById);
UserRouter.post('/user/edit/:id', UserController.update);
UserRouter.delete('/user/:id', UserController.remove);

module.exports = UserRouter;