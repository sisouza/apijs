const { Router } = require("express");
const UserRoutes = require("./user.routes");
//const MovieRoutes = require("./movie.routes");

const router = Router();

//initial
router.get('/', (req, res) => res.send('Welcome'));

router.get('/user', UserRoutes);
//router.get('/movie', MovieRoutes);

module.exports = router;