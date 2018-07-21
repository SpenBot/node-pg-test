//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()
const pool = require('../db/connection')




//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/courses', (req, res) => {
  pool.query('SELECT * FROM courses')
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))
})

// GET ONE
router.get('/api/courses/:id', (req, res) => {
  pool.query('SELECT * FROM courses WHERE id = $1', [req.params.id])
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows[0]))
})

// CREATE
router.post('/api/courses', (req, res) => {

  pool.query('INSERT INTO courses (title, room, class_time) VALUES ($1, $2, $3, $4)',
    [req.body.title, req.body.room, req.body.class_time]
  )
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))

})

// UPDATE
router.put('/api/courses/:id', (req, res) => {

  pool.query('UPDATE courses SET title = $1, room = $2, class_time = $3 WHERE id = $4',
    [req.body.title, req.body.room, req.body.class_time, req.params.id]
  )
    .catch(err => console.log(err))
    .then((data) =>  res.json(data.rows))

})

// DELETE
router.delete('/api/courses/:id', (req,res) => {

  pool.query('DELETE FROM courses WHERE id = $1', [req.params.id])
    .catch(err => console.log(err))
    .then((data) => res.json(data))

})



//////// EXPORT MODULES ////////

module.exports = router



// END
