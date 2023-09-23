const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('db 연결에 에러가 있습니다. : ' + err.stack);
    return;
  }
  console.log("db가 연결되었습니다.");
});


module.exports = db;