//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')



//////// MODEL ////////

const StudentModel = connection.define("student", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  grade: Sequelize.INTEGER,
  email: Sequelize.STRING
})



//////// EXPORT MODULES ////////

module.exports = StudentModel





// END
