//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const connection = require('../db/connection')

// const StudentModel = require('./studentModel')
// const EnrollmentModel = require('./enrollmentModel')



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

// CourseModel.belongsToMany(StudentModel, {foreignKey: 'course_id', through: EnrollmentModel})




//////// EXPORT MODULES ////////

module.exports = CourseModel




// END
