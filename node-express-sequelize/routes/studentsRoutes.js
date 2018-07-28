//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

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
    .then(student => res.json(student.dataValues))
})

// GET ONE BY NAME
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
  StudentModel.create()
    .catch(err => console.log('\n\t Error: Database Query Failed \n', err))
    .then(student => {
      console.log(req.body)
      res.json(student.dataValues)
    })
})






//
// const id = customerId;
// Customer.update( { firstname: firstname, lastname: lastname, age: age },
// 				 { where: {id: customerId} }
// 			   ).then(() => {
// 				 res.status(200).send("updated successfully a customer with id = " + id);
// 			   });
//



//////// EXPORT MODULES ////////

module.exports = router



// END




// //////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
//
// const express = require('express')
// const router = express.Router()
// const pool = require('../db/connection')
//
//
//
//
// //////// ROUTE CONTROLLER FUNCTIONS ////////
//
// // GET ALL
// router.get('/api/students', (req, res) => {
//   pool.query('SELECT * FROM students')
//     .catch(err => console.log(err))
//     .then((data) => res.json(data.rows))
// })
//
// // GET ONE
// router.get('/api/students/:id', (req, res) => {
//   pool.query('SELECT * FROM students WHERE id = $1', [req.params.id])
//     .catch(err => console.log(err))
//     .then((data) => res.json(data.rows[0]))
// })
//
// // CREATE
// router.post('/api/students', (req, res) => {
//
//   pool.query('INSERT INTO students (first_name, last_name, grade, email) VALUES ($1, $2, $3, $4)',
//     [req.body.first_name, req.body.last_name, req.body.grade, req.body.email]
//   )
//     .catch(err => console.log(err))
//     .then((data) => res.json(data.rows))
//
// })
//
// // UPDATE
// router.put('/api/students/:id', (req, res) => {
//
//   pool.query('UPDATE students SET first_name = $1, last_name = $2, grade = $3, email = $4 WHERE id = $5',
//     [req.body.first_name, req.body.last_name, req.body.grade, req.body.email, req.params.id]
//   )
//     .catch(err => console.log(err))
//     .then((data) =>  res.json(data.rows))
//
// })
//
// // DELETE
// router.delete('/api/students/:id', (req,res) => {
//
//   pool.query('DELETE FROM students WHERE id = $1', [req.params.id])
//     .catch(err => console.log(err))
//     .then((data) => res.json(data))
//
// })
//
//
//
// //////// EXPORT MODULES ////////
//
// module.exports = router
//
//
//
// // END
