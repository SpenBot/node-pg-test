# node-pg-test
node postgres test

# START UP

### Setting Up Local PostGres (on linux) :
- install postgres
- sign in to postgres as default user
- run seed data sql file

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

- build docker container/images
- use openshift to deploy docker container with github webhook
