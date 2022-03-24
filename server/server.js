const express = require('express')
const app = express() 
const conn = require('./db/conn')
const Metrics = require('./models/Metrics')
const User = require('./models/User')

app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());


app.get('/', async (req, res) => {
  const user = await User.findAll({raw: true})
  res.render('oi')
  console.log(user)
})

app.post('/register', async (req, res) => {  
  const name = req.body.name
  const birthday = req.body.birthday

  await User.create({name, birthday})
})


app.post('/metrics', async (req, res) => {
  const meditionDay = req.body.meditionDay
  await Metrics.create({meditionDay})
})

conn.
sync({force: true})
.then(() => {
  app.listen(3001)
})  