//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');

const TeacherModel = require('../models/models-index').TeacherModel
const CourseModel = require('../models/models-index').CourseModel



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
