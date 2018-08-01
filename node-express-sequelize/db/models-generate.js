var SequelizeAuto = require('sequelize-auto')
// var auto = new SequelizeAuto('database', 'user', 'pass');

var auto = new SequelizeAuto('node_seq_test_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    // directory: false, // prevents the program from writing to disk
    port: '5432',
    additional: {
        timestamps: false,
        underscored: true
    },
    tables: ['students', 'courses', 'enrollments', 'teachers']
})

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
