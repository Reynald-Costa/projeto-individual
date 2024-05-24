 var database = require("../database/config");

 function buscarUltimasMedidas() {

     var instrucaoSql = `SELECT  qtdPontos  as pontos_usuarios, usuario.nome as nomeAtual FROM registro join usuario on fkUsuario = id;`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
}

 module.exports = {
     buscarUltimasMedidas,
 }

