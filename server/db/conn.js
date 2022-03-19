const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('cluster', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize