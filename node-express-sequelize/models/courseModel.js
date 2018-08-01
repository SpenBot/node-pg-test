//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')

const TeacherModel = require('./teacherModel')


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
    },
    teacher_id: {
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
    timestamps: false, // disable auto-generated timestamps
    underscored: true // disables camelCase and uses course_id instead when referenced in other models
  }
)

//////// ASSOCIATIONS ////////

CourseModel.belongsTo(TeacherModel, {foreignKey: 'teacher_id'})
TeacherModel.hasMany(CourseModel, {foreignKey: 'teacher_id'})




//////// EXPORT MODULES ////////

module.exports = CourseModel




// END
