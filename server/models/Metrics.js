const {DataTypes} = require('sequelize')
const db = require('../db/conn')
const User = require('./User')

const Metrics = db.define('Metrics', {
  
  bpm: {
    type: DataTypes.INTEGER,
  },

  arterialSystolic: {
    type: DataTypes.INTEGER,
  },

  arterialDiastole: {
    type: DataTypes.INTEGER,
  },

  meditionDay: {
    type: DataTypes.STRING,
  }
})

Metrics.belongsTo(User)
module.exports = Metrics