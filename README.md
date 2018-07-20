# START UP

### Setting Up Local PostGres (on linux) :

  - THIS WILL BE UPDATED WITH A SCRIPT SOON!

  - sign in to postgres as default user (from the root of you OS, I think)
```
      $ sudo -u postgres psql postgres
```
  - create database, then connect to it
```
      # CREATE DATABASE node_test_db;
      # \c node_test_db
```
  - run script (<path-from-your-root>/node-express-pg/db/seeds/seeds.js)
```  
      # \i <full-path-to-seeds.js>;
```
  - check if it worked, then quit
```  
      # \d
      # SELECT * FROM students;
      # \q
```


### Starting the Node-Express-PostGres Backend :

  - cd into the n-e-p directory, and set the configuration file (you may need to do $ npm install)
```
      $ source ./cfg/config_local.sh
```
  - run the server
```
      $ node index.js
```

### Running Angular-Node

  - cd into the a-n directory
```
      $ ng serve
```



# NOTES

  - the first place you should look is index.js (default main for node) in the node-express-pg
  - then checkout the routes, you'll notice they use pool.query
  - pool comes from 'pg' in db/connection.js, where the connection to the database is logged and confirmed.
  - when you start index.js you should see 'Database Connection Success' message. Thats from db/connection.js, but since index.js uses the routes, and the routes uses connection.js, we get that message (...I think)

  - this uses JavaScript ES6 promises
    - promises are functions that can be tied to asynchronous functions, like http requests
    - promises will wait for the asynchronous function to complete before executing.
    - basically, they are analogous to callback functions.
    - .then and .catch are very common promises in node-express servers.

  - I highly installing nodemon globally to use to run node servers.
  - it allows hot-refreshes, meaning it will re-start the server every time you save changes in your text-editor.  
```
      $ npm install -g nodemon
      $ nodemon index.js
```



# PLAN

  - set up a local postgres
  - populate postgres dummy data


  - build node service
  - connect to postgres
  - build CRUD REST routes


  - build angular front-end and test CRUD functionality.


  - add join table
  - add seed files and data, with users
  - handle validations
  - handle merges?
  - add models to backend?
  - confirm connection pool stability, and database security


  - deploy postgres
  - deploy node and angular


  - build docker container/images
  - use openshift to deploy docker container with github webhook
