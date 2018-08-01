//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');

const CourseModel = require('../models/models-index').CourseModel




//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/courses', (req, res) => {
  CourseModel.findAll()
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(courses => res.json(courses))
})

// GET ONE BY ID
router.get('/api/courses/:id', (req, res) => {
  CourseModel.findById(req.params.id)
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(course => res.json(course))
})

// GET ONE BY TITLE (just an example)
router.get('/api/courses/name/:title', (req, res) => {
  CourseModel.findOne({
    where: {
       title: req.params.title
     }
   })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(course => res.json(course))
})

// CREATE
router.post('/api/courses', (req, res) => {
  CourseModel.create({
    title: req.body.title,
    room: req.body.room,
    course_time: req.body.course_time,
    created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(course => res.json(course))
})

// UPDATE
router.put('/api/courses/:id', (req, res) => {
  CourseModel.update(
    {
      title: req.body.title,
      room: req.body.room,
      course_time: req.body.course_time,
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      where: {id: req.params.id}
    }
  )
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(course => res.json(course))
})

// DELETE (hard delete)
router.delete('/api/courses/:id', (req, res) => {
  CourseModel.destroy({
    where: {id: req.params.id}
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(course => res.json(course))
})


//////// EXPORT MODULES ////////

module.exports = router



// END
