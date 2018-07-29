//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const connection = require('../db/connection')
const StudentModel = require('../models/studentModel')
const CourseModel = require('../models/courseModel')



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
    StudentModel.create({
      first_name: 'Luke',
      last_name: 'Skywalker',
      grade: 4,
      email: 'luke@mail.com'
    })
    StudentModel.create({
      first_name: 'Darth',
      last_name: 'Vader',
      grade: 4,
      email: 'darth@mail.com'
    })
    StudentModel.create({
      first_name: 'Liea',
      last_name: 'Organa',
      grade: 4,
      email: 'liea@mail.com'
    })
    StudentModel.create({
      first_name: 'Han',
      last_name: 'Solo',
      grade: 4,
      email: 'han@mail.com'
    })
    StudentModel.create({
      first_name: 'Lando',
      last_name: 'Calrissian',
      grade: 4,
      email: 'lando@mail.com'
    })
    StudentModel.create({
      first_name: 'Jabba',
      last_name: 'Hut',
      grade: 4,
      email: 'jabba@mail.com'
    })
    StudentModel.create({
      first_name: 'Boba',
      last_name: 'Fett',
      grade: 4,
      email: 'boba@mail.com'
    })
    StudentModel.create({
      first_name: 'Obi-Wan',
      last_name: 'Kenobi',
      grade: 4,
      email: 'obi@mail.com'
    })


    CourseModel.create({
      title: 'English',
      room: '1A',
      course_time: '08:00'
    })
    CourseModel.create({
      title: 'Chemistry',
      room: '1B',
      course_time: '12:15'
    })
    CourseModel.create({
      title: 'History',
      room: '1C',
      course_time: '13:00'
    })
    CourseModel.create({
      title: 'Statistics',
      room: '1D',
      course_time: '10:30'
    })
    CourseModel.create({
      title: 'Algebra',
      room: '2A',
      course_time: '09:20'
    })
    CourseModel.create({
      title: 'Literature',
      room: '2B',
      course_time: '10:30'
    })
    CourseModel.create({
      title: 'Social Studies',
      room: '2C',
      course_time: '08:00'
    })
    CourseModel.create({
      title: 'Biology',
      room: '2D',
      course_time: '09:20'
    })

      .then( () => {
        process.exit()
      })

  })


// END
