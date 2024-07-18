const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

app.use( express.static('public') )

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html')
  })
  app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
  })
  app.get('*', function (req, res) {
    res.send('404')
  })

app.listen(port)