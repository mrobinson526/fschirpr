import mysql from 'mysql';
const pool = mysql.createPool ({
  host: 'localhost',
  user: 'chirprapp',
  password: '$pswdtest2021',
  database: 'chirpr'
});
mysql.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});