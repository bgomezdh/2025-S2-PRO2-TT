module.exports = function (sequelize, dataTypes){

    let alias = 'Actor'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        favorite_movie_id: {
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
        tableName : "actors",
        timestamps:false, 
    };

    const Actor = sequelize.define(alias, cols, config);

    //relacion
    Actor.associate = function (models) {

        // Actor => Movies

        Actor.belongsToMany(models.Movie , {
            as: "movies",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false

        })

    };

    return Actor;

}