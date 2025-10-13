//Importar los modelos


let actorsController = {
    index: function(req, res) {
        //Comentá la línea debajo para poder ver en pantalla lo que traen los modelos
        return res.render("actors");//Este return anula la ejecución de todo el código sigueinte de la función. Comentá la línea para poder ver la información en la pantalla del navegador.

        db.Actor.findAll()
            .then(function(resultados){
                return res.send(resultados);
                //return res.render("actors", {actors: resultados});
            })
            .catch(function(error){
                return res.send(error);
            })
    }
  };


  module.exports = actorsController;