//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')

// const CourseModel = require('../models/courseModel')
// const EnrollmentModel = require('../models/enrollmentModel')



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
    }
  },
  {
    timestamps: false, // disable auto-generated timestamps
    underscored: true // disables camelCase and uses course_id instead when referenced in other models
  }
)



//////// ASSOCIATIONS ////////

// StudentModel.belongsToMany(CourseModel, {as: 'Students', through: EnrollmentModel})
// StudentModel.associate = function () {
//   StudentModel.hasMany(CourseModel)
// }
// StudentModel.associate = function () {
//   StudentModel.belongsToMany(CourseModel, {as: 'Courses', through: EnrollmentModel})
// }



//////// EXPORT MODULES ////////

module.exports = StudentModel





// END
