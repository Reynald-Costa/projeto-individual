var express = require("express");
var router = express.Router();

var registroController = require("../controllers/registroController");

router.post("/registrar", function (req, res) {
    registroController.registrar(req, res);
});

module.exports = router;