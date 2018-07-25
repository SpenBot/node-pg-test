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
  - seed file is in 'node-express-pg/db/seeds/seeds.sql'
```  
      # \i <full-path>/seeds.sql;
```
  - check if it worked, then quit
```  
      # \d
      # SELECT * FROM students;
      # \q
```


### Starting the Node-Express-PostGres Backend :

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

# NOTES


  ---

  - the first place you should look is index.js (default main for node) in '/node-express-pg'
  - then checkout the routes, you'll notice they use pool.query
  - pool comes from 'pg' in db/connection.js, where the connection to the database is logged and confirmed.
  - cfg sets environment variables, and models aren't utilized yet.

  ---

  - this uses JavaScript ES6 promises
    - promises are functions that can be chained to asynchronous functions, like http requests
    - promises will wait for the asynchronous function to complete before executing.
    - basically, they are analogous to callback functions.
    - .then and .catch are very common promises in node-express servers.

    ---

  - I highly recommend installing 'nodemon' globally to use to run node servers.
  - it allows hot-refreshes, meaning it will re-start the server every time you save changes in your text-editor.  
```
      $ npm install -g nodemon
      $ nodemon index.js
```



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
