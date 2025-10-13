//Importar los modelos
const db = require('../database/models');

let moviesController = {
    index: function(req, res) {
        //Comentá la línea debajo para poder ver en pantalla lo que traen los modelos
        //return res.render("movies");//Este return anula la ejecución de todo el código sigueinte de la función. Comentá la línea para poder ver la información en la pantalla del navegador.

        let relaciones = {
            include: [
                {association: "genres"},
                {association: "actors"}
            ]
        }

        db.Movie.findAll(relaciones)
            .then(function(resultados){
                return res.send(resultados);
                //return res.render("movies", {movies: resultados});
            })
            .catch(function(error){
                return res.send(error);
            })
    }
  };


  module.exports = moviesController;