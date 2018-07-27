//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./cfg/config.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())



//////// START SERVER ON ENVIRONMENT PORT ////////

// set port based on environment
const port = config.PORT
app.set('port', port)

// run server
app.listen(app.get('port'), () => {
  console.log(`\n\t Node-Postgres Server Running On PORT:${app.get('port')}`)
})



/////// ROUTES ////////

// const studentsRoutes = require('./routes/studentsRoutes')
// const coursesRoutes = require('./routes/coursesRoutes')

// app.use('/', studentsRoutes)
// app.use('/', coursesRoutes)




const sequelize = require('./db/connection')
const StudentModel = require('./models/studentModel')


//////// ROUTE CONTROLLER FUNCTIONS ////////

// GET ALL
app.get('/api/students', (req, res) => {

    StudentModel.findAll()
      .catch(err => console.log('WTF', err))
      .then(students => {
        res.json(students)
        console.log('\n\n DATA:', students)
      })

})

// StudentModel.findOne()
//   .catch(err => console.log('WTF', err))
//   .then(students => {
//     res.json(students.dataValues)
//     console.log('\n\n DATA:', students.dataValues)
//   })







// END
