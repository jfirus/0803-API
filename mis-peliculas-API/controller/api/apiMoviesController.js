const db = require('../../database/models');

const controller = {

    listar: (req, res) =>{
    
        db.Movies.findAll()
        .then((resultadoMovies) =>{
            let jsonResult = {
                meta: {
                    status: 200,
                    length: resultadoMovies.length,
                    url: req.originalUrl
                },
                data: resultadoMovies
            }   
            return res.send(jsonResult);
        })
        .catch(error=>{
            console.log(error);
            let jsonResult = {
                meta: {
                    status: 404                
                },
                data: 'Error Access'
            }    
            return res.send(jsonResult);
        })
    }
};
module.exports = controller;
