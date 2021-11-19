const db = require("./db.js");

exports.selectLojas = async function (){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM lojas');
    return rows;
}

exports.insertLoja = async function (loja){
    const conn = await db.connect();
    const sql = 'INSERT INTO lojas(razao_social,cnpj, nome_fantasia, cep, endereco, telefone, descricao) VALUES (?, ?, ?, ?, ?, ?, ?);';
    const values = [loja.razao_social, loja.cnpj, loja.nome_fantasia, loja.cep, loja.endereco, loja.telefone, loja.descricao];
    return await conn.query(sql, values);
}
