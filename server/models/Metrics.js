const {DataTypes} = require('sequelize')
const db = require('../db/conn')
const User = require('./User')
const Metrics = db.define('Metrics', {
  
  bpm: {
    type: DataTypes.INTEGER
  },

  arterialPressure: {
    type: DataTypes.INTEGER
  },

  meditionDay: {
    type: DataTypes.DATE
  },

  meditionHour: {
    type: DataTypes.TIME
  }
})

Metrics.belongsTo(User)
module.exports = Metrics