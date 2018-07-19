# node-pg-test
node postgres test

# PLAN

- set up a local postgres
- populate postgres data

- build node service
- connect to postgres
- build CRUD REST routes

- build angular front-end and test CRUD functionality.

- add join table
- add seed files and data, with users
- add models
- confirm connection pool issues

- deploy postgres
- deploy node and angular

>> maybe southpark?
**CHANGE TO STUDENTS, CLASSES, ENROLLMENTS**

>> maybe add teachers, then do many to many for classes and students
>> maybe you can friend students, rate and review classes, etc.
>> incorporate soft deletes

# LOCAL POSTGRES

  $ psql

  > CREATE DATABASE node_test_db;

  $ \l
  $ \c node_test_db

  > CREATE TABLE students (id SERIAL PRIMARY KEY, first_name VARCHAR NOT NULL, last_name VARCHAR NOT NULL, grade integer NOT NULL, email VARCHAR NOT NULL UNIQUE);

  $ \d

  > INSERT INTO students (first_name, last_name, grade, email) VALUES ('Spenser', 'Holstein', 4, 'spen@mail.com');
  > INSERT INTO students (first_name, last_name, grade, email) VALUES ('Rody', 'Rodriquez', 4, 'rody@mail.com');
  > INSERT INTO students (first_name, last_name, grade, email) VALUES ('Belinda', 'Weinberg', 4, 'belin@mail.com');
  > INSERT INTO students (first_name, last_name, grade, email) VALUES ('Luke', 'Skywalker', 4, 'luke@mail.com');

  > CREATE TABLE courses (id SERIAL PRIMARY KEY, title VARCHAR NOT NULL, time VARCHAR NOT NULL, room VARCHAR NOT NULL);


# NODE-EXPRESS-PG

- models, routes, index.js, sql-scripts, db  

  $ npm init -y
  $ npm install express
  $ npm install body-parser
  $ npm install cors
  $ npm install pg

- make index file, cfg files and confirm app runs

  $ source ./cfg/config_local.sh

- make a connection.js file, connect to database and export pool.
- make routes

  > client databse connection management, so it goes back to the pool



# ANGULAR

- make the goddamn front end
- maybe later add lazy loading and other stuff.





# QUESTIONS

> whats the difference between client and pool

> use asynch, to manage pools

> should I have pool.end() if connection fails on node

> wait ... where do the models go?


> config_local.sh - is that max connection pools?
> not sure whats happening in config.js, why !function()

> so it seems like, db is where you do a connection and make sure your connection is successful then use it everywhere else, since you'll probably have a lot of routes.

> why console.error on connection file?


https://www.google.com/search?ei=z55PW4HjIMG0ggfJ3ofQBA&q=node-pg+pool.connect%28err%29&oq=node-pg+pool.connect%28err%29&gs_l=psy-ab.3...335574.339952.0.340133.17.17.0.0.0.0.139.1333.15j2.17.0....0...1c.1.64.psy-ab..0.14.1068...0j0i22i30k1j0i22i10i30k1j33i160k1.0.YXRcJm5S71M

https://www.tutorialspoint.com/sql/sql-select-database.htm

https://www.google.com/search?q=SQL+how+to+see+database&oq=SQL+how+to+see+database&aqs=chrome..69i57j0l5.3569j0j7&sourceid=chrome&ie=UTF-8

https://stackoverflow.com/questions/8096550/mysql-determine-which-database-is-selected

https://github.com/brianc/node-postgres/issues/120

https://github.com/brianc/node-postgres/issues/1263

https://github.com/brianc/node-postgres/issues/1215

https://github.com/brianc/node-pg-pool

- Good Rest Building
https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6
http://mherman.org/blog/2017/08/23/building-a-restful-api-with-koa-and-postgres/
https://gigadom.in/2014/07/20/working-with-node-js-and-postgresql/

- Updating
https://stackoverflow.com/questions/21759852/easier-way-to-update-data-with-node-postgres
https://dba.stackexchange.com/questions/186147/how-to-update-multiple-columns-of-multiple-rows-in-one-sql-statement
https://www.dofactory.com/sql/update

- Object.entries
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

- SQL Cheet Sheet
https://zeroturnaround.com/rebellabs/sql-cheat-sheet/


# NOTES

- this uses JavaScript ES6 promises
  - promises are functions that can be tied to asynchronous functions, or functions that
  - promises will wait for the asynchronous function to run before executing.
  - basically, they are analogous to callback functions.
  - .then and .catch are very common promises.

- this is a simple post-gres app.
- please add in comments for others.

- the first place you should look is index.js (node is configured to look there by default)
- then checkout the routes, you'll notice they use pool.
- pool comes from db/connection.js where the connection to the database is logged and confirmed.

- nodemon


# ALTERNATE CODE


+ alternate get request, instead of promises
```js

pool.query('SELECT * FROM members', (err, data) => {
  if (err) {
    console.log(err)
  }
  else {
    res.json(data)
  }
})

```


+ alternate create and update methods
```js

// CREATE
router.post('/api/students', (req, res) => {

  console.log(req.body)

  let newStudent = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    grade: req.body.grade,
    email: req.body.email,
  }

  pool.query('INSERT INTO students
    (first_name, last_name, grade, email)
    VALUES ($1, $2, $3, $4)',
    [newStudent.first_name, newStudent.last_name, newStudent.grade, newStudent.email])
    .catch(err => console.log(err))
    .then((data) => res.json(data.rows))

})

// UPDATE
router.put('/api/students/:id', (req, res) => {

  console.log(req.body)

  let updatedStudent = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    grade: req.body.grade,
    email: req.body.email,
  }

  function runUpdate(column, value) {
    pool.query(`UPDATE students SET ${column} = ${value} WHERE id = ${req.params.id}`)
  }

  // and loop through object key/values to update all...

  // pool.query(`UPDATE students SET col1 = 1 WHERE id = ${req.params.id}`)
})

```










>>>> END <<<<<<<<<<<<<<<<<<<<<<<  
