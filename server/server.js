const express = require('express')
const app = express() 
const conn = require('./db/conn')
const Metrics = require('./models/Metrics')
const User = require('./models/User')

app.get('/', (req,res) => {
  res.json({"users": ["userone", "usertwo", "userthree"]})
})

conn.
sync()
.then(() => {
  app.listen(3001)
})