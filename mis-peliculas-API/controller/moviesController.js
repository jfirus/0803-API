const db = require('../database/models');

const controller = {

    listar: (req, res) =>{
        db.Movies.findAll()
        .then((resultadoMovies) =>{
            return res.send(resultadoMovies);
        })
        .catch(error=>{
            console.log(error);
        })
    }
};
module.exports = controller;
