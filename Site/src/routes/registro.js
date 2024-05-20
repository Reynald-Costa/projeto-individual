var express = require("express");
var router = express.Router();

var registroController = require("../controllers/registroController");

router.post("/registrarPontos/:fkUsuario", function (req, res) {
    registroController.registrarDados(req, res);
});

module.exports = router;

