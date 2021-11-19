var express = require('express');
var router = express.Router();

var lojaController = require('./controller/lojaController');
var lojaDTO = require('./dto/lojaDTO').lojaDTO;

router.get('/selecionar', async function(req, res, next) {
  try {
    console.log('Selecionando registros.');
    const obj = await lojaController.selecionarLojas();  
    res.status(200).json(obj);
  } catch(err){
    res.send(412,err);
    console.log(err);
  }
});

router.post('/inserir', async function(req, res, next) {
  lojaDTO.razao_social = req.body.razao_social;
  lojaDTO.cnpj = req.body.cnpj;  
  lojaDTO.nome_fantasia = req.body.nome_fantasia; 
  lojaDTO.cep = req.body.cep; 
  lojaDTO.endereco = req.body.endereco; 
  lojaDTO.telefone = req.body.telefone; 
  lojaDTO.descricao = req.body.descricao; 
  try{ 
    const obj = await lojaController.inserirLoja(lojaDTO);
    res.status(200).json(obj);
    console.log('Registro inserido com sucesso, pelo visto.');
  } catch(err){
    res.send(412,err);
  }   
});
module.exports = router;