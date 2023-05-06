const cerberusRouter = require('express').Router()
let consulta = require('../models/cerberus');
//const User = require('../models/user')




// CONSULTA 1
cerberusRouter.get('/consulta1', function (req, res) {
  console.log('entro al router')
    consulta.consulta1(function (result) {
      console.log('consulta 1')
      if (typeof result !== undefined) {
  
        res.json(result);
  
      } else {
        res.json({ "mensaje": "No se pudo ejecutar la consulta1" });
      }
    });
  });

  // CONSULTA 2
cerberusRouter.get('/consulta2', function (req, res) {

  consulta.consulta2(function (result) {
    if (typeof result !== undefined) {

      res.json(result);

    } else {
      res.json({ "mensaje": "No se pudo ejecutar la consulta1" });
    }
  });
});

module.exports = cerberusRouter