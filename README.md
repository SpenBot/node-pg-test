# START UP

### Setting Up Local PostGres (on linux) :

  - sign in to postgres as default user
```
      $ sudo -u postgres psql postgres
```
  - create database, then connect to it
```
      # CREATE DATABASE node_test_db;
      # \c node_test_db
```
  - now that you're signed in and created/connected to a db, run a seed file script with full path (path can be copied by right clicking in your text-editor usually)
  - seed file is in 'postgres-db/seeds/seeds.sql'
```  
      # \i <full-path>/seeds.sql;
```
  - check if it worked, then quit
```  
      # \d
      # SELECT * FROM students;
      # \q
```


### Starting the Node-Express-Sequelize Backend :

  - cd into the node directory, and set the configuration file (you may need to do $ npm install)
```
      $ source ./cfg/config_local.sh
```
  - run the server
```
      $ node index.js
```

### Running Angular-Node

  - cd into the angular directory (again $ npm install)
```
      $ ng serve
```


# FEATURES

  - This is the basic version of the app. DOES NOT contain any join tables or combined data for enrollments.

  - node, express, sequelize, cors
  - angular
  - postgresql
  - uses sequelize ORM for postgres connection
  - uses pools to manage connections


# FEATURES TO ADD




# PLAN

1.
  - set up a local postgres
  - populate postgres dummy data
2.
  - build node service
  - connect to postgres
  - build CRUD REST routes
3.
  - build angular front-end and test CRUD functionality.
4.
  - add join table to db
  - add seed/dump files and data
  - add psql users
  - handle migrations, add models
  - confirm connection pool stability, and database security
  - handle validations
5.
  - deploy postgres to AWS
  - deploy node and angular to AWS
6.
  - build docker container/images
  - use docker to deploy to AWS
  - use openshift to deploy docker container with github webhook
