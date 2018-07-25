//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()
const pool = require('../db/connection')




//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/students-combined', (req, res) => {

  pool.query('SELECT * FROM students JOIN enrollments ON students.id = enrollments.student_id JOIN courses ON courses.id = enrollments.course_id;')
    .catch(err => console.log(err))
    .then((resData) => {

        // make new array
        let newData = []

        // loop through response resData
        resData.rows.forEach(data => {

            // create enrollments property array
            data.enrollments = []

            // check if there is a matching student id
            let matchIdx = newData.findIndex(nd => {
              return nd.student_id === data.student_id;
            })

            // push enrollments only if student exists
            if (matchIdx >= 0) {
                newData[matchIdx].enrollments.push({
                  course_title: data.title,
                  course_room: data.room,
                  course_time: data.class_time
                })
            }
            // push data with enrollments if student does not exists 
            else if (matchIdx === -1) {
                data.enrollments.push({
                  course_title: data.title,
                  course_room: data.room,
                  course_time: data.class_time
                })
                newData.push(data)
            }

        })

        res.json(newData)
    })

})


//////// EXPORT MODULES ////////

module.exports = router



// END
