var express = require('express');
var router = express.Router();

var lojaController = require('./controller/lojaController');
var lojaDTO = require('./dto/lojaDTO').lojaDTO;

router.get('/', function(req, res, next) {
    res.send("Resposta pela Index");
});


module.exports = router;