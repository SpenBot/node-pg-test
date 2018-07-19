//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()
const pool = require('../db/connection')




//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/students', (req, res) => {
  pool.query('SELECT * FROM students')
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))
})

// GET ONE
router.get('/api/students/:id', (req, res) => {
  pool.query('SELECT * FROM students WHERE id = $1', [req.params.id])
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))
})

// CREATE
router.post('/api/students', (req, res) => {

  console.log(req.body)

  pool.query('INSERT INTO students (first_name, last_name, grade, email) VALUES ($1, $2, $3, $4)',
    [req.body.first_name, req.body.last_name, req.body.grade, req.body.email]
  )
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))

})

// UPDATE
router.put('/api/students/:id', (req, res) => {

  console.log(req.body)

  pool.query('UPDATE students SET first_name = $1, last_name = $2, grade = $3, email = $4, WHERE id = $5',
    [req.body.first_name, req.body.last_name, req.body.grade, req.body.email, req.params.id]
  )
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))

})

// DELETE
router.delete('/api/students/:id', (req,res) => {

  pool.query(`DELETE FROM students WHERE id = ${req.params.id}`)
  .catch(err => console.log(err))
  .then((data) => res.json(data.rows))

})



//////// EXPORT MODULES ////////

module.exports = router



// END
