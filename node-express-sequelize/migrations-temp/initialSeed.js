//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const connection = require('../db/connection')
const StudentModel = require('../models/studentModel')
const CourseModel = require('../models/courseModel')
// const EnrollmentModel = require('../models/enrollmentModel')



//////// RUN STUDENT DATA SEED MIGRATION ////////

connection.sync({force: true})

  .catch(err => {
    console.log('Sequelize sync error:', err)
  })

  .then( ()=> {
    StudentModel.bulkCreate(
      [
        {
          first_name: 'Eric',
          last_name: 'Cartman',
          grade: 4,
          email: 'eric@mail.com'
        },
        {
          first_name: 'Kenny',
          last_name: 'McCormick',
          grade: 4,
          email: 'kenny@mail.com'
        },
        {
          first_name: 'Kyle',
          last_name: 'Broflovski',
          grade: 4,
          email: 'kyle@mail.com'
        },
        {
          first_name: 'Stan',
          last_name: 'Marsh',
          grade: 4,
          email: 'stan@mail.com'
        },
        {
          first_name: 'Luke',
          last_name: 'Skywalker',
          grade: 4,
          email: 'luke@mail.com'
        },
        {
          first_name: 'Darth',
          last_name: 'Vader',
          grade: 4,
          email: 'darth@mail.com'
        },
        {
          first_name: 'Liea',
          last_name: 'Organa',
          grade: 4,
          email: 'liea@mail.com'
        },
        {
          first_name: 'Han',
          last_name: 'Solo',
          grade: 4,
          email: 'han@mail.com'
        },
        {
          first_name: 'Lando',
          last_name: 'Calrissian',
          grade: 4,
          email: 'lando@mail.com'
        },
        {
          first_name: 'Jabba',
          last_name: 'Hut',
          grade: 4,
          email: 'jabba@mail.com'
        },
        {
          first_name: 'Boba',
          last_name: 'Fett',
          grade: 4,
          email: 'boba@mail.com'
        },
        {
          first_name: 'Obi-Wan',
          last_name: 'Kenobi',
          grade: 4,
          email: 'obi@mail.com'
        }
      ],
      {
        validate: true
      }
    )

    CourseModel.bulkCreate(
      [
        {
          title: 'English',
          room: '1A',
          course_time: '08:00'
        },
        {
          title: 'Chemistry',
          room: '1B',
          course_time: '12:15'
        },
        {
          title: 'History',
          room: '1C',
          course_time: '13:00'
        },
        {
          title: 'Statistics',
          room: '1D',
          course_time: '10:30'
        },
        {
          title: 'Algebra',
          room: '2A',
          course_time: '09:20'
        },
        {
          title: 'Literature',
          room: '2B',
          course_time: '10:30'
        },
        {
          title: 'Social Studies',
          room: '2C',
          course_time: '08:00'
        },
        {
          title: 'Biology',
          room: '2D',
          course_time: '09:20'
        }
      ],
      {
        validate: true
      }
    )

    // EnrollmentModel.bulkCreate(
    //   [
    //     {
    //       course_id: 1,
    //       student_id: 1
    //     },
    //     {
    //       course_id: 2,
    //       student_id: 1
    //     },
    //     {
    //       course_id: 3,
    //       student_id: 1
    //     },
    //     {
    //       course_id: 1,
    //       student_id: 2
    //     },
    //     {
    //       course_id: 2,
    //       student_id: 2
    //     },
    //     {
    //       course_id: 2,
    //       student_id: 3
    //     },
    //     {
    //       course_id: 3,
    //       student_id: 3
    //     },
    //     {
    //       course_id: 4,
    //       student_id: 4
    //     },
    //     {
    //       course_id: 5,
    //       student_id: 4
    //     },
    //     {
    //       course_id: 4,
    //       student_id: 5
    //     },
    //     {
    //       course_id: 5,
    //       student_id: 5
    //     },
    //     {
    //       course_id: 6,
    //       student_id: 6
    //     },
    //     {
    //       course_id: 6,
    //       student_id: 7
    //     },
    //     {
    //       course_id: 7,
    //       student_id: 7
    //     },
    //     {
    //       course_id: 7,
    //       student_id: 8
    //     },
    //     {
    //       course_id: 8,
    //       student_id: 8
    //     }
    //   ],
    //   {
    //     validate: true
    //   }
    // )

  })
  // .then(() => process.exit())





// END
