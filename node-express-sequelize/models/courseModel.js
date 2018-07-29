//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')



//////// MODEL ////////

const CourseModel = connection.define("course",
  {
    title: Sequelize.STRING,
    room: Sequelize.STRING,
    course_time: Sequelize.STRING
  }
)




//////// EXPORT MODULES ////////

module.exports = CourseModel




// END
