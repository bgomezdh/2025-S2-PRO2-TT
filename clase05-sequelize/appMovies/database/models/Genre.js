module.exports = function (sequelize, dataTypes){

    let alias = 'Genre'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        },
        active: {
            type: dataTypes.INTEGER
        },
        created_at : {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },

    }

    let config = {
        tableName : "genres",
        timestamps:false, 
    };

    const Genre = sequelize.define(alias, cols, config);

   //relacion

   Genre.associate = function(models) {

    // Genre => Movie
    Genre.hasMany( models.Movie, {
        as: "movies",
        foreignKey: "genre_id"
    })
    
   };

    return Genre;

}