const express = require('express')
const app = express() 
const conn = require('./db/conn')
const Metrics = require('./models/Metrics')
const User = require('./models/User')

app.get('/', (req,res) => {
  res.json({"users": ["userone", "usertwo", "userthree"]})
})

app.post('/user/send', async (req, res) => {
  const name = req.body.name
  const birthday = req.body.birthday
  const meditionDay = req.body.meditionDay

  const Data = {
    name,
    birthday,
    meditionDay
  }

  await User.create({Data})
})

conn.
sync()
.then(() => {
  app.listen(3001)
})