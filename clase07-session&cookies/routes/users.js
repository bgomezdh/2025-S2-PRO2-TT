const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.show); //Muestra el formulario
router.post('/newuser/', usersController.create); //Procesa el formulario y guarda los datos en la db.

router.get('/login', usersController.login); //Muestra el login

//Creá la ruta por Post que precesa el login. El método en el controlador que procesa el login es processLoguin Porcesa el login
router.post('/processLogin', usersController.processLogin);

router.get('/logout', usersController.logout);

module.exports = router;