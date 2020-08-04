module.exports = (sequelize, DataTypes) => {
    let alias= 'Movies';
    let cols ={
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: { type: DataTypes.STRING},
        rating: { type: DataTypes.DECIMAL},
        awards: { type: DataTypes.INTEGER},
        release_date: { type: DataTypes.DATE},
        length: {type: DataTypes.INTEGER},
        genre_id: {type: DataTypes.INTEGER},
    }

    let config ={
        tableName : 'movies',
        timestamps : true
    }
    let table =  sequelize.define(alias, cols, config);
    return table;
}


