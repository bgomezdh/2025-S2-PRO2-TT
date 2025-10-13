module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Movie'; 
   
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
        timestamps:false
    }

   const Movie = sequelize.define(alias, cols, config);

    //relacion

    Movie.associate = function (models) {

        // movie => Genre

        Movie.belongsTo(models.Genre , {
            as: "genres",
            foreignKey: "genre_id"
        } )

        Movie.belongsToMany(models.Actor , {
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false

        })

    };

   return Movie;
}