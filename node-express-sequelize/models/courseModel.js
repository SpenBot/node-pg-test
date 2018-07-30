//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')

const StudentModel = require('../models/studentModel')
// const EnrollmentModel = require('../models/enrollmentModel')

//////// MODEL ////////

const CourseModel = connection.define("course",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    room: {
      type: Sequelize.STRING,
      allowNull: false
    },
    course_time: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false, // disable auto-generated timestamps
    underscored: true // disables camelCase and uses course_id instead when referenced in other models
  }
)


//////// ASSOCIATIONS ////////

// CourseModel.associate = function () {
//   CourseModel.belongsToMany(StudentModel, {as: 'Courses', through: EnrollmentModel})
// }
CourseModel.associate = function () {
  CourseModel.belongsToMany(StudentModel)
}






//////// EXPORT MODULES ////////

module.exports = CourseModel




// END
