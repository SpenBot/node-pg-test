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

const port = config.PORT
app.set('port', port)

app.listen(app.get('port'), () => {
  console.log(`\n\t Node-Postgres Server Running On PORT:${app.get('port')}`)
})



/////// ROUTES ////////

const studentsRoutes = require('./routes/studentsRoutes')
// const coursesRoutes = require('./routes/coursesRoutes')

app.use('/', studentsRoutes)
// app.use('/', coursesRoutes)

app.get('/', (req, res) =>{
  res.send('hello world')
})






// END
