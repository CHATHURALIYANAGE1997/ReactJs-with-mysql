const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",  
    user: "username",  
    password: " your password" , 
    database: "database name",
});
 
module.exports = connection;
