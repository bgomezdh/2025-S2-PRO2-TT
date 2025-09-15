const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    return res.send("Esta es la ruta para mostrar todos los pilotos");
});

router.get("/crear", function(req, res) {
    return res.send("Esta es la ruta para crear un piloto");
});




module.exports = router;