
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
// app.set('port', process.env.PORT || 4000)

// set port based on environment
const port = config.PORT
app.set('port', port)

// app.listen(app.get('port'), () => {
//   console.log(`\n\t Server listening on port : ${app.get('port')}. \n`)
// })

app.listen(app.get('port'), () => {
  console.log(`\n\t Server running on port : ${app.get('port')}. \n`)
})



//// ROUTES ///////////////////////////////////////////////////////////////////

const membersRoutes = require('./routes/membersRoutes')

app.use('/', membersRoutes)











//// EXPRESS TEST /////////////////////////////////////////////////////////////
