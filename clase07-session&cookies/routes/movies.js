const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.index);
router.get('/detail/:id', moviesController.show);
router.get('/search-results', moviesController.search);

module.exports = router;