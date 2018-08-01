//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');

const StudentModel = require('../models/models-index').StudentModel
const CourseModel = require('../models/models-index').CourseModel



//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/students-all', (req, res) => {
  StudentModel.findAll({
    include: [
      {
        model: CourseModel
      }
    ]
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(students => res.json(students))
})




//////// EXPORT MODULES ////////

module.exports = router



// END
