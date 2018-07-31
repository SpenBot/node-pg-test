//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')

const StudentModel = require('./studentModel')
const CourseModel = require('./courseModel')



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



//////// ASSOCIATIONS ////////

StudentModel.belongsToMany(CourseModel, {foreignKey: 'student_id', through: EnrollmentModel})
CourseModel.belongsToMany(StudentModel, {foreignKey: 'course_id', through: EnrollmentModel})






//////// EXPORT MODULES ////////

module.exports = EnrollmentModel





// END
