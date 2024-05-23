 var database = require("../database/config");

 function buscarUltimasMedidas() {

     var instrucaoSql = `SELECT  qtdPontos  as pontos_usuarios ,  DATE_FORMAT(dtAtual,'%H:%i:%s') as horarioAtual FROM registro;`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
}

 module.exports = {
     buscarUltimasMedidas,
 }

