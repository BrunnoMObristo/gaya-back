
exports.connect = async function (){
    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }
 
    const mysql = require("mysql2/promise");
    //mysql://usuario:senha@servidor:porta/banco
    const connection = await mysql.createConnection({
        user: 'root',
        host: 'localhost',
        password: 'labfiap#2019$',
        database: 'gaya'
    });
         
    console.log("Conectou no MySQL com Promise!");
    global.connection = connection;
    return connection;
}





