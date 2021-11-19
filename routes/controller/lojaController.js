const lojaDAO = require("../dao/lojaDAO");     

module.exports.selecionarLojas = () => {
    return lojaDAO.selectLojas();
}

module.exports.inserirLoja = (loja) => {
    return lojaDAO.insertLoja(loja);
}
