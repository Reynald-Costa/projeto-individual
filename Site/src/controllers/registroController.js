var registroModel = require("../models/registroModel");

function registrar(req, res) {
    var qtdPontos = req.body.qtdPontosServer
    var id = req.body.idServer
    var idQuiz = req.body.quizServer
    console.log('ID NO CONTROLLER É: ' + id)

    registroModel.registrar(qtdPontos, id, idQuiz)
        .then(
            function (resultado) {
                res.status(201).send({})
            }
        )
}

module.exports = {
    registrar
}