//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')

const CourseModel = require('../models/courseModel')
const EnrollmentModel = require('../models/enrollmentModel')



//////// MODEL ////////

const StudentModel = connection.define("student",
  {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    grade: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
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

StudentModel.belongsToMany(CourseModel, {foreignKey: 'student_id', through: EnrollmentModel})



//////// EXPORT MODULES ////////

module.exports = StudentModel





// END
