const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: proccess.env.MYSQL_DATABASE
})

connection.once("connect", () => {
  console.log('connected to database')
})
connection.once("error", (error) => {
  console.log("Somthing went wrong:", error)
})
module.exports = connection