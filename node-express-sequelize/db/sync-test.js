//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const connection = require('../db/connection')

const StudentModel = require('../models/studentModel')
const CourseModel = require('../models/courseModel')
const TeacherModel = require('../models/teacherModel')
const EnrollmentModel = require('../models/enrollmentModel')



//////// RUN STUDENT DATA SEED MIGRATION ////////

connection.sync()
  .catch(err => console.log("Sequelize sync error:", err))
  .then(() => {
    console.log("\n\t >>> Sequelize Sync Test Successful \n")
    process.exit()
  })





// END
