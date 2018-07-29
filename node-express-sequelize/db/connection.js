//////// DEPENDENCIES, CONFIGURATIONS ////////

const Sequelize = require('sequelize')
const config = require('../cfg/config.js')



//////// DATABASE CONNECTION ////////

const connection = new Sequelize(
  config.POSTGRES_URL,
  {
    dialect: 'postgres',
    pool:{max: config.MAX_CON, min: 0, acquire: 30000, idle: 10000}
    // logging: false
  }
)

connection.validate({
  logging: false
})
  .then(() => {
    console.log('\n\t >>> Connection to PostGres Database Successful \n')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  });



//////// EXPORT MODULE ////////

module.exports = connection




// END
