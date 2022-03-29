const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tops',
    password: ''
});

module.exports = pool.promise();