//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');
const StudentModel = require('../models/studentModel')


//////// ROUTE CONTROLLER FUNCTIONS ////////


// GET ALL
router.get('/api/students', (req, res) => {
  StudentModel.findAll()
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(students => res.json(students))
})

// GET ONE BY ID
router.get('/api/students/:id', (req, res) => {
  StudentModel.findById(req.params.id)
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(student => res.json(student))
})

// GET ONE BY NAME (just an example)
router.get('/api/students/name/:firstname/:lastname', (req, res) => {
  StudentModel.findOne({
    where: {
       first_name: req.params.firstname,
       last_name: req.params.lastname
     }
   })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(student => res.json(student))
})

// CREATE
router.post('/api/students', (req, res) => {
  StudentModel.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    grade: req.body.grade,
    email: req.body.email
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(student => res.json(student))
})

// UPDATE
router.put('/api/students/:id', (req, res) => {
  StudentModel.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      grade: req.body.grade,
      email: req.body.email,
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      where: {id: req.params.id}
    }
  )
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(student => res.json(student))
})

// DELETE (hard delete)
router.delete('/api/students/:id', (req, res) => {
  StudentModel.destroy({
    where: {id: req.params.id}
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(student => res.json(student))
})



// ALTERNATIVE METHOD OF 'WHITE LISTING' PROPERTIES, SO ONLY PROPERTIES YOU WANT GET SET
  // Student.create(req.body, {
  //   fields: ['first_name', 'last_name', 'grade', 'email']
  // })
  //   .then((student) => res.json(student))




//////// EXPORT MODULES ////////

module.exports = router



// END
