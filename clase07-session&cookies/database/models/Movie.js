module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Movie'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type: dataTypes.STRING,
        },
        rating:{
            type: dataTypes.DECIMAL,
        },
        awards:{
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATE,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        genre_id:{
            type: dataTypes.INTEGER,
        },
        created_at : {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName : "movies",
        timestamps:false, //Indica al modelo si debe buscar los campos createdAt y updatedAt en la tabla. Si están en la tabla no es necesario declararlos en la lista de campos.
        // Si en la tabla están con guión bajo hay que usar la propiedad underscore.
        // underscored: false, //Indica al modelo que si loscampos de timestamp en la tabla usan o no guiones bajos en lugar de camelCase.
    }

   const Movie = sequelize.define(alias, cols, config);


   return Movie;
}