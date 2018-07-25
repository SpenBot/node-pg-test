//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()
const pool = require('../db/connection')




//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/enrollments', (req, res) => {
  pool.query('SELECT * FROM enrollments')
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))
})

// GET ONE
router.get('/api/enrollments/:id', (req, res) => {
  pool.query('SELECT * FROM enrollments WHERE id = $1', [req.params.id])
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows[0]))
})

// CREATE
router.post('/api/enrollments', (req, res) => {

  pool.query('INSERT INTO enrollments (course_id, student_id) VALUES ($1, $2, $3)',
    [req.body.course_id, req.body.student_id]
  )
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))

})

// UPDATE
router.put('/api/enrollments/:id', (req, res) => {

  pool.query('UPDATE enrollments SET course_id = $1, student_id = $2 = $3 WHERE id = $4',
    [req.body.course_id, req.body.student_id, req.params.id]
  )
    .catch(err => console.log(err))
    .then((data) =>  res.json(data.rows))

})

// DELETE
router.delete('/api/enrollments/:id', (req,res) => {

  pool.query('DELETE FROM enrollments WHERE id = $1', [req.params.id])
    .catch(err => console.log(err))
    .then((data) => res.json(data))

})



//////// EXPORT MODULES ////////

module.exports = router



// END
