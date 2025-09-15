const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    return res.send("Esta es la ruta para motrar todos los autos");
});

router.get("/detalle/:id?", function(req, res) {
    let idEnviado = req.params.id;

    if (idEnviado != undefined) {
        return res.send("El detalle de el auto numero = " + idEnviado);
    } else {
        return res.send("Ingrese un id principe.")
    }
    
})



module.exports = router;