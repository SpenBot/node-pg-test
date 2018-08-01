//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');

const CourseModel = require('../models/models-index').CourseModel
const StudentModel = require('../models/models-index').StudentModel
const TeacherModel = require('../models/models-index').TeacherModel



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
