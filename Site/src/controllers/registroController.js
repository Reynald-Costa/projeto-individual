var registroModel = require("../models/registroModel");

function registrarDados(req, res) {
    var qtdPontos = req.body.qtdPontosServer
    var fkUsuario = req.params.fkUsuario

    registroModel.registrarPontos(qtdPontos, fkUsuario)
        .then(
            function (resultado) {
                res.status(201).send({})
            }
        )
}

module.exports = {
    registrarDados
}