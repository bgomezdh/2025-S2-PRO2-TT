/* Importaciones o Requires */
const db = require("../db/index");

/* objeto con metodos */
const productController = {
  index: function (req, res) {
    return res.render("autos", { listadoAutos: db.lista, enOferta: true });
  },
  show: function (req, res) {
    let idEnviado = req.params.id;

    if (idEnviado != undefined) {
      return res.send(db.lista[idEnviado]);
    } else {
      return res.send("Ingrese un id principe.");
    }
  },
};

/* exportaciones */
module.exports = productController;
