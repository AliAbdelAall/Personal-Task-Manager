const mongoose = require("mongoose")

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI)
}

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB")
})

mongoose.connection.plugin("error", (error) => {
  console.log("MongoDB error: ", error)
})

module.exports = { connect }