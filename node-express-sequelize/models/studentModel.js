//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////
const Sequelize = require('sequelize');
const sequelize = require('../db/connection')


const StudentModel = sequelize.define("student2", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  grade: Sequelize.INTEGER,
  email: Sequelize.STRING
})

// sequelize.sync({force: true})
//   .then( ()=> {
//     StudentModel.create({
//       first_name: 'rody',
//       last_name: 'aasds',
//       grade: 3,
//       email: 'yyyyy'
//     })
//     StudentModel.create({
//       first_name: 'poop',
//       last_name: 'balls',
//       grade: 3,
//       email: 'ccccccx'
//     })
//     StudentModel.create({
//       first_name: 'TTTTTTT',
//       last_name: 'qqqqqqs',
//       grade: 3,
//       email: 'zzzzzz'
//     })
//   })


module.exports = StudentModel


// id SERIAL PRIMARY KEY,
// first_name VARCHAR NOT NULL,
// last_name VARCHAR NOT NULL,
// grade integer NOT NULL,
// email VARCHAR NOT NULL UNIQUE
