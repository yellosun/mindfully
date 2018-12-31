'use strict'
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    body: DataTypes.STRING
  }, {})
  Quote.associate = function(models) {
    // associations can be defined here
  }
  return Quote
}