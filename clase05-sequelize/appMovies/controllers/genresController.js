//Importar los modelos


let genresController = {
    index: function(req, res) {
        //Comentá la línea debajo para poder ver en pantalla lo que traen los modelos
        return res.render("genres");//Este return anula la ejecución de todo el código sigueinte de la función. Comentá la línea para poder ver la información en la pantalla del navegador.
        
        db.Genre.findAll()
            .then(function(resultados){
                return res.send(resultados);
                //return res.render("genres", {genres: resultados});
            })
            .catch(function(error){
                return res.send(error);
            })
    }
  };


  module.exports = genresController;