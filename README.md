# START UP


### Setting Up Local PostGres (on linux) :

  - sign in to postgres as default user
```
      $ sudo -u postgres psql postgres
```
  - create database, then connect to it
```
      # CREATE DATABASE node_seq_test_db;
      # \c node_seq_test_db
```

### Seeding the PostGres with Dummy Data:

  - (in a separate CLI window) cd to root of this project, and run this js file
```  
      $ node node-express-sequelize/migrations-temp/initialMigration.js
```
  - (back in psql window) check if it worked
```  
      # \d
      # SELECT * FROM students;
      # SELECT * FROM courses;
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

### Logging SQL Commands in Backend

  - Sequelize by default logs the actual SQL commands it generates and executes using its models.
  - Its annoying so I disabled them here.
  - To view the logs there's only one line you should comment out :
    + ./node-express-sequelize/db/connection.js
    +  logging: false




# FEATURES

  - This is the basic version of the app. DOES NOT contain any join tables or combined data for enrollments.

  - node, express, sequelize, cors
  - angular
  - postgresql
  - uses sequelize ORM for postgres connection
  - uses pools to manage connections


# FEATURES TO ADD



# ISSUES

  - The biggest issue I ran into with Sequelize is that it makes it more difficult to do work in vanilla SQL.
  - If you create a table with constraints in SQL, Sequelize may not want to work with it.
  - If you create a table using Sequelize, it becomes harder to do INSERT/UPDATE in psql or pgAdmin.
    + This could be primarily due to a bug with the createdAt and updatedAt columns that Sequelize auto-generates. One solution is to define those column manually, and disable default timestamps. 
  - Basically, what happens is it pressures you to use one or the other, or do a bit of work-arounds in order to use both.
