const mysql = require('mysql2');


const connection  = mysql.createPool({
  host: 'localhost',
  databse: 'employeeDatabase',
  user: 'root',
  password: 'chps694530',
  multipleStatements: true
});

module.exports = connection;