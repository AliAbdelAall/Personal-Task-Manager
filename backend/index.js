const express = require("express")
const { connect } = require('./config/mongoDB.config')

require("dotenv").config()

const app = express()

const port = process.env.PORT

app.use(express.json())

const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')

app.use('/auth', authRouter)
app.use('/users', userRouter)

app.listen(port, (error) => {
  if (error) throw new Error(error)
  console.log(`server is running on port ${port}`)
  connect()
})
