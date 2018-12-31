'use strict'
const quotes = require('../../quotes.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Quotes', quotes, {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Quotes', null, {})
  }
}
