const express = require("express")

const app = express()

app.listen(3000, () => {
  console.log("server is running on port 3000")
})

app.get('/get-todo', (req, res) => {
  res.send('nounou')
})



