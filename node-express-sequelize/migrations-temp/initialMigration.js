//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const StudentModel = require('../models/studentModel')
const connection = require('../db/connection')



//////// RUN STUDENT DATA SEED MIGRATION ////////

connection.sync({force: true})
  .then( ()=> {
    StudentModel.create({
      first_name: 'Eric',
      last_name: 'Cartman',
      grade: 4,
      email: 'eric@mail.com'
      })
      StudentModel.create({
        first_name: 'Kenny',
        last_name: 'McCormick',
        grade: 4,
        email: 'kenny@mail.com'
      })
      StudentModel.create({
        first_name: 'Kyle',
        last_name: 'Broflovski',
        grade: 4,
        email: 'kyle@mail.com'
      })
      StudentModel.create({
        first_name: 'Stan',
        last_name: 'Marsh',
        grade: 4,
        email: 'stan@mail.com'
      })
      .then( () => {
        process.exit()
      })
  })


// END
