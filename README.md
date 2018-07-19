# node-pg-test
node postgres test

# START UP

## Setting Up Local PostGres (on linux) :
-

## Starting the Node-Express-PostGres Backend :
- cd into the node-express-directory, and set the configuration file
```
$ source ./cfg/config_local.sh
```
- run the server
```
node index.js
```

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
