
const Sequelize = require('sequelize');
const connection = require('../db/connection')

const CourseModel = require('../models-auto/courses')(connection, Sequelize)
const TeacherModel = require('../models-auto/teachers')(connection, Sequelize)


CourseModel.belongsTo(TeacherModel, {foreignKey: 'teacher_id'})
TeacherModel.hasMany(CourseModel, {foreignKey: 'teacher_id'})

module.exports = {
  CourseModel,
  TeacherModel
}
