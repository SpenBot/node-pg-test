//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');

const TeacherModel = require('../models/models-index').TeacherModel



//////// ROUTE CONTROLLER FUNCTIONS ////////


// GET ALL
router.get('/api/teachers', (req, res) => {
  TeacherModel.findAll()
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(teachers => res.json(teachers))
})


// GET ONE BY ID
router.get('/api/teachers/:id', (req, res) => {
  TeacherModel.findById(req.params.id)
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(teacher => res.json(teacher))
})

// GET ONE BY NAME (just an example)
router.get('/api/teachers/name/:teacherName', (req, res) => {
  TeacherModel.findOne({
    where: {
       teacherName: req.params.name
     }
   })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(teacher => res.json(teacher))
})

// CREATE
router.post('/api/teachers', (req, res) => {
  TeacherModel.create({
    name: req.body.name,
    created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(teacher => res.json(teacher))
})

// UPDATE
router.put('/api/teachers/:id', (req, res) => {
  TeacherModel.update(
    {
      name: req.body.name,
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      where: {id: req.params.id}
    }
  )
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(teacher => res.json(teacher))
})

// DELETE (hard delete)
router.delete('/api/teachers/:id', (req, res) => {
  TeacherModel.destroy({
    where: {id: req.params.id}
  })
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(teacher => res.json(teacher))
})



//////// EXPORT MODULES ////////

module.exports = router




// END


// END
