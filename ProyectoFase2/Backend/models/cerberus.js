var database = require('../utils/config');
var consulta = {};


//CONSULTA 1
consulta.consulta1 = function (callback) {
        console.log('Entro consulta1')
    if (database) {

            var query ="SELECT * FROM Administrador";

            database.query(query, function (error, result) {
                    if (error) console.log(error);
                    callback(result);
            });
    }
}

//CONSULTA 2
consulta.consulta2 = function (callback) {
        if (database) {
    
                var query ="SELECT * FROM Developer";
    
                database.query(query, function (error, result) {
                        if (error) console.log(error);
                        callback(result);
                });
        }
    }

module.exports = consulta;