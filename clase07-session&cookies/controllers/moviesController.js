//Importar los modelos
let db = require("../database/models");
let op = db.Sequelize.Op;

let moviesController = {
    index: function(req, res) {
        //Mostrar todas las pleículas en la vista movies.ejs. Modificá el código para conseguir el objetivo.
        
        return res.render("movies");
    },

    show: function(req, res){
        //Mostrar los datos de una película las pleículas en la vista movies.ejs. Modificá el código para conseguir el objetivo.

        return res.render("oneMovie");      
    },

    search: function(req, res){
        //Mostrar los datos de una película las pleículas en la vista movies.ejs. Modificá el código para conseguir el objetivo.

        return res.render("search-results");
    }
  };


  module.exports = moviesController;