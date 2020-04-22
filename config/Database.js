const mysql = require("mysql2");

const connection = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "пароль_от_сервера_mysql",
    database: "usersdb"
});

module.exports = connection;