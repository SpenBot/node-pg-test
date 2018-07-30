//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')


//////// MODEL ////////

const EnrollmentModel = connection.define("enrollment",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    student_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)


//////// EXPORT MODULES ////////

module.exports = EnrollmentModel





// END
