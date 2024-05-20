var database = require("../database/config")

function registrarPontos(qtdPontos, fkUsuario) {
    var instrucao = `
    INSERT INTO registro (qtdPontos, fkUsuario) VALUES ('${qtdPontos}, '${fkUsuario}')
    `
    return database.executar(instrucao);
}

module.exports = {
    registrarPontos
}