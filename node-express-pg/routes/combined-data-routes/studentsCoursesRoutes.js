//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()
const pool = require('../../db/connection')




//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/students', (req, res) => {

  pool.query('SELECT * FROM students JOIN enrollments ON students.id = enrollments.student_id JOIN courses ON courses.id = enrollments.course_id;')
    .catch(err => console.log(err))
    .then((data) => {

        let newData = []

        data.rows.forEach(d => {

            d.enrollments = []

            let matchIdx = newData.findIndex(nd => {
              return nd.student_id === d.student_id;
            })

            if (matchIdx >= 0) {
              newData[matchIdx].enrollments.push({
                course_title: d.title,
                course_room: d.room,
                course_time: d.class_time
              })
            } else if (matchIdx === -1) {
              d.enrollments.push({
                course_title: d.title,
                course_room: d.room,
                course_time: d.class_time
              })
              newData.push(d)
            }

        })

        res.json(newData)
    })

})


//////// EXPORT MODULES ////////

module.exports = router



// END
