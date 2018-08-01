//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')

const CourseModel = require('./courseModel')




//////// MODEL ////////

const TeacherModel = connection.define("teacher",
  {
    name: {
      type: Sequelize.STRING,
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
    timestamps: false, // disable auto-generated timestamps
    underscored: true // disables camelCase and uses course_id instead when referenced in other models
  }
)




//////// ASSOCIATIONS ////////






//////// EXPORT MODULES ////////

module.exports = TeacherModel





// END
