//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()
const pool = require('../db/connection')




//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
router.get('/api/students-combined', (req, res) => {

  pool.query('SELECT s.id, s.first_name, s.last_name, s.grade, s.email, e.course_id, c.title, c.room, c.class_time FROM students as s JOIN enrollments as e ON s.id = e.student_id JOIN courses as c ON c.id = e.course_id;')
    .catch(err => console.log(err))
    .then((resData) => {

        // make new array
        let newData = []

        // loop through response resData
        resData.rows.forEach(rData => {

            // create enrollments property array for resData
            rData.enrollments = []

            // check if there is a matching student id in newData[]
            let matchIdx = newData.findIndex(nData => {
              return nData.id === rData.id;
            })

            // push enrollments only, if student exists in newData[]
            if (matchIdx >= 0) {
                newData[matchIdx].enrollments.push({
                  course_id: rData.course_id,
                  course_title: rData.title,
                  course_room: rData.room,
                  course_time: rData.class_time
                })
            }
            // push resData with enrollments, if student does not exists  newData[]
            else if (matchIdx === -1) {
                rData.enrollments.push({
                  course_id: rData.course_id,
                  course_title: rData.title,
                  course_room: rData.room,
                  course_time: rData.class_time
                })
                // remove the courses property from root of object
                delete rData.course_id
                delete rData.title
                delete rData.room
                delete rData.class_time
                // push object to newData[]
                newData.push(rData)
            }

        })


        res.json(newData)
    })

})


//////// EXPORT MODULES ////////

module.exports = router



// END
