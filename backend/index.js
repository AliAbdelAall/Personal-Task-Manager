const express = require("express")

const { connect } = require('./config/mongoDB.config')

require("dotenv").config()

const app = express()

const port = process.env.PORT

app.use(express.json())

const userRouter = require('./routes/user.routes')

app.use('/users', userRouter)

app.listen(port, (error) => {
  if (error) throw error
  console.log(`server is running on port ${port}`)
  connect()
})



