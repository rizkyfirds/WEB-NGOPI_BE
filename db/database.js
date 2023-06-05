var mysql = require('mysql2');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ngopi_db"
});

module.exports = db;