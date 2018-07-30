//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')

const StudentModel = require('../models/studentModel')
const CourseModel = require('../models/courseModel')

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
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    }
  },
  {
    timestamps: false
  }
)





//////// EXPORT MODULES ////////

module.exports = EnrollmentModel





// END
