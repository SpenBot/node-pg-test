
# START UP


### Setting Up Local PostGres Database (on linux) :

  - sign in to postgres as default user
```
      $ sudo -u postgres psql postgres
```
  - create database, then connect to it
```
      # CREATE DATABASE node_seq_test_db;
      # \c node_seq_test_db
```


### Seeding the PostGres with SQL (alternative method):

  - now that your signed in and connected to the db, run the seed file script with full path (path can be copied by right clicking in your text-editor usually)
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


### Starting the Node-Express-Sequelize Backend (local environment) :

  - cd into the node directory, and set the configuration file (you may need to do $ npm install)
```
      $ source ./config/config_local.sh
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

  - Technologies:
    - NODE, EXPRESS, SEQUELIZE, CORS, ANGULAR, POSTGRESQL

  - Details:
    - no migrations required! this works with existing PG database.
    - uses pools to manage connections
    - uses many-many relationship through join table "enrollments"
    - example of a one-many "hasMany" with teachers
    - separate routes for data that includes associated tables

  - Benefits:
    - This sequelize api works with an existing PG database built in psql. Meaning this is completely independent of any migrations.
    - Aside from easier controllers, using sequelize models gives the added benefit of backend-validations, and model hooks for before/after validations and creating records - which makes it easy to do things like hashing passwords before inserting into the db.





# ISSUES

  - The biggest issue I ran into with Sequelize is that it makes it more difficult to do work in vanilla SQL.
  - Sequelize wants you to use its synch(), associations, and migrations to work with you database, and requires extra attention if you don't want to use those.
  - If you create a table with constraints in SQL, Sequelize may not want to work with it. If you create a table using Sequelize, it becomes harder to do INSERT/UPDATE in psql or pgAdmin.
  - The primary reason is due to the createdAt and updatedAt columns that Sequelize auto-generates. The workaround is to disable the auto-generated one and define them manually, so they dont become an issue with psql/pgAdmin.
  - It also took me a long time to figure out how to format the timestamps consistently between the two, which sucked.
