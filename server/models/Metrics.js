const {DataTypes} = require('sequelize')
const db = require('../db/conn')
const User = require('./User')
const Metrics = db.define('Metrics', {
  
  bpm: {
    type: DataTypes.INTEGER,
    required: true
  },

  arterialSystolic: {
    type: DataTypes.INTEGER,
    required: true
  },

  arterialDiastole: {
    type: DataTypes.INTEGER,
    required: true
  },

  meditionDay: {
    type: DataTypes.DATE,
    required: true
  },

  meditionHour: {
    type: DataTypes.TIME,
    required: true
  }
})

Metrics.belongsTo(User)
module.exports = Metrics