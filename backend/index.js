const express = require("express")

const { connect } = require('./config/mongoDB.config')

require("dotenv").config()

const app = express()

app.use(express.json())

const userRouter = require('./routes/user.routes')

app.use('/users', userRouter)

app.listen(3000, (error) => {
  if (error) throw error
  console.log("server is running on port 3000")
  connect()
})



