//////// DEPENDENCIES, CONFIGURATIONS ////////

const Sequelize = require('sequelize')
const config = require('../cfg/config.js')



//////// DATABASE CONNECTION ////////

const connection = new Sequelize(
  config.POSTGRES_URL,
  {
    dialect: 'postgres', // this line is required for connection to work with postgres
    pool:{max: config.MAX_CON, min: 0, acquire: 30000, idle: 10000},
    logging: false // comment this out to console log the SQL sequelize executes
  }
)

connection.authenticate({
  logging: false // comment this out to console log the SQL sequelize executes
})
  .then(() => {
    console.log('\n\t >>> Connection to PostGres Database Successful \n')
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err)
  });



//////// EXPORT MODULE ////////

module.exports = connection




// END
