  const  { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User', {
  name: {
    type: DataTypes.STRING
  },

  birthday: {
    type: DataTypes.DATE
  }
})

module.exports = User