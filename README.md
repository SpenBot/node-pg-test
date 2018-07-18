# node-pg-test
node postgres test

# PLAN

- set up a local postgres
- populate postgres data

- build node service
- connect to postgres
- build CRUD REST routes

- build angular front-end and test CRUD functionality.

# LOCAL POSTGRES

  $ psql

  > CREATE DATABASE node_test_db;

  $ \l
  $ \c node_test_db

  > CREATE TABLE members (id SERIAL PRIMARY KEY, first_name VARCHAR NOT NULL, last_name VARCHAR NOT NULL, username VARCHAR NOT NULL, email VARCHAR NOT NULL UNIQUE);

  $ \d

  > INSERT INTO members (first_name, last_name, username, email) VALUES ('Spenser', 'Holstein', 'Spen', 'spen@mail.com');
  > INSERT INTO members (first_name, last_name, username, email) VALUES ('Rody', 'Rodriquez', 'RodyMan', 'rody@mail.com');
  > INSERT INTO members (first_name, last_name, username, email) VALUES ('Belinda', 'Weinberg', 'Bindy', 'belin@mail.com');
  > INSERT INTO members (first_name, last_name, username, email) VALUES ('Luke', 'Skywalker', 'NewHope', 'luke@mail.com');

# NODE-EXPRESS-PG

- models, routes, index.js, sql-scripts, db  


  $ npm init -y
  $ npm install express
  $ npm install body-parser
  $ npm install cors
  $ npm install pg


# QUESTIONS

> config_local.sh - is that max connection pools?
> not sure whats happening in config.js, why !function()







>>>> END <<<<<<<<<<<<<<<<<<<<<<<  
