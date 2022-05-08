var mysql = require("mysql");
var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "web_it",
});
module.exports = connection;
