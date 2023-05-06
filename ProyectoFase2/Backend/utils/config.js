const mysql = require('mysql');


let mysql_parameters =  {
    host:"100.26.21.127",
    user:"root",
    password:"mysql123",
    database:"CerberusDB",
    port:"3306",
    insecureAuth:true
};

let connection = mysql.createConnection(mysql_parameters);

connection.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log("CONNECTED");
    }
});

module.exports = connection;