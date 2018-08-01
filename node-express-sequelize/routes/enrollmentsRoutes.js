//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');

const EnrollmentModel = require('../models/enrollmentModel')

// const EnrollmentModel = require('../models-auto/enrollments')


//////// ROUTE CONTROLLER FUNCTIONS ////////


// GET ALL
router.get('/api/enrollments', (req, res) => {
  EnrollmentModel.findAll()
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(enrollments => res.json(enrollments))
})

// GET ONE BY ID
router.get('/api/enrollments/:id', (req, res) => {
  EnrollmentModel.findById(req.params.id)
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(enrollment => res.json(enrollment))
})

// GET ALL BY STUDENT ID
router.get('/api/enrollments/student/:student_id', (req, res) => {
  EnrollmentModel.findAll({
    where: {
       student_id: req.params.student_id
     }
   })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(enrollment => res.json(enrollment))
})

// GET ALL BY COURSE ID
router.get('/api/enrollments/course/:course_id', (req, res) => {
  EnrollmentModel.findAll({
    where: {
       course_id: req.params.course_id
     }
   })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(enrollment => res.json(enrollment))
})

// CREATE
router.post('/api/enrollments', (req, res) => {
  EnrollmentModel.create({
    student_id: req.body.student_id,
    course_id: req.body.course_id
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(enrollment => res.json(enrollment))
})

// UPDATE
router.put('/api/enrollments/:id', (req, res) => {
  EnrollmentModel.update(
    {
      student_id: req.body.student_id,
      course_id: req.body.course_id,
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      where: {id: req.params.id}
    }
  )
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(enrollment => res.json(enrollment))
})

// DELETE (hard delete)
router.delete('/api/enrollments/:id', (req, res) => {
  EnrollmentModel.destroy({
    where: {id: req.params.id}
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(enrollment => res.json(enrollment))
})


//////// EXPORT MODULES ////////

module.exports = router



// END
