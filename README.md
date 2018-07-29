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

  - node, express, pg, cors
  - angular
  - postgresql

  - uses "pg" module for node-postgres connection
  - uses pg pools to manage connections
  - backend combined data responses




# FEATURES TO ADD

+ DATABASE
  - nest tables in schemas
  - add users

+ BACKEND
  - database migrations
  - pool/client connection handling
  - backend validations
  - database backups
  - use either filter() or reduce() to combine data
  - handle combined data crud functions

+ FRONTEND
  - crud functions for combined data
  - search bar
