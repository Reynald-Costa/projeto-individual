var database = require("../database/config")

function registrar(qtdPontos, id, idQuiz) {
    var instrucao = `
    INSERT INTO registro (qtdPontos, fkUsuario, fkQuiz) VALUES ('${qtdPontos}', '${id}', '${idQuiz}')
    `
    return database.executar(instrucao);
}

module.exports = {
    registrar
}