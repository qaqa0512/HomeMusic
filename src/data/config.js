// Ket noi database
const mysql = require('mysql');

// Khai bao
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MY SQL Connected...");
    }
});

module.exports = db;