//////// DEPENDENCIES, CONFIGURATIONS ////////

const Sequelize = require('sequelize')
const config = require('../config/config.js')



//////// DATABASE CONNECTION ////////

const connection = new Sequelize(
  config.POSTGRES_URL,
  {
    dialect: 'postgres', // this line is required for connection to work with postgres
    pool:{max: config.MAX_CON, min: 0, acquire: 30000, idle: 10000},
    operatorsAliases: false,  // this stops console logs of sequelize deprecations
    logging: false // this stops console logs of the SQL that sequelize generates/executes
  }
)

connection.authenticate({
  logging: false // this stops console log of the SQL sequelize executes for authenticate()
})
  .catch(err => console.log('Unable to connect to the database:', err))
  .then(() => console.log('\n\t >>> Connection to PostGres Database Successful'))


//////// EXPORT MODULE ////////

module.exports = connection




// END
