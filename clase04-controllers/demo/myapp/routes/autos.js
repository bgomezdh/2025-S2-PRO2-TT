const express = require("express");
const router = express.Router();


/* traer controller */
const productController = require("../controllers/productController")

router.get("/", productController.index);

router.get("/detalle/:id?", productController.show )



module.exports = router;