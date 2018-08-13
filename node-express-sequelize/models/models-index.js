
//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const Sequelize = require('sequelize');
const connection = require('../db/connection')



//////// IMPORT ALL AUTO-GENERATED MODELS ////////

const StudentModel = require('./students')(connection, Sequelize)
const CourseModel = require('./courses')(connection, Sequelize)
const EnrollmentModel = require('./enrollments')(connection, Sequelize)
const TeacherModel = require('./teachers')(connection, Sequelize)




//////// VALIDATIONS AND HOOKS ////////

// StudentModel.validate = {
//   len: [3,6]
// }



//////// ASSOCIATIONS ////////

// students-courses many-to-many
StudentModel.belongsToMany(CourseModel, {foreignKey: 'student_id', through: EnrollmentModel})
CourseModel.belongsToMany(StudentModel, {foreignKey: 'course_id', through: EnrollmentModel})

// teachers-courses one-to-many
CourseModel.belongsTo(TeacherModel, {foreignKey: 'teacher_id'})
TeacherModel.hasMany(CourseModel, {foreignKey: 'teacher_id'})




//////// EXPORT MODULES ////////

module.exports = {
  CourseModel,
  TeacherModel,
  StudentModel,
  EnrollmentModel
}



// END
