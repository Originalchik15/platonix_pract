const mysql = require('mysql2');

const config = {
  host: 'platon.teyhd.ru',
  user: 'student',
  password: 'studpass',
  database: 'andreev_todo',
  port: '3407',
  charset: 'utf8mb4_general_ci'
};

const pool = mysql.createPool(config).promise();

module.exports = pool;
