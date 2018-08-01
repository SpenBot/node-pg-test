//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');

const CourseModel = require('../models/courseModel')
const StudentModel = require('../models/studentModel')
const TeacherModel = require('../models/teacherModel')

// const CourseModel = require('../models-auto/courses')
// const StudentModel = require('../models-auto/students')





//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/courses-all', (req, res) => {
  CourseModel.findAll({
    include: [
      {
        model: TeacherModel
      },
      {
        model: StudentModel
      },
    ]
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(courses => res.json(courses))
})





//////// EXPORT MODULES ////////

module.exports = router



// END
