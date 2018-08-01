//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');

const TeacherModel = require('../models/teacherModel')
const CourseModel = require('../models/courseModel')

// const TeacherModel = require('../models-auto/teachers')
// const CourseModel = require('../models-auto/courses')



//////// ROUTE CONTROLLER FUNCTIONS ////////


// GET ALL
router.get('/api/teachers', (req, res) => {
  TeacherModel.findAll({
    include: [
      {
        model: CourseModel
      }
    ]
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(teachers => res.json(teachers))
})




//////// EXPORT MODULES ////////

module.exports = router



// END
