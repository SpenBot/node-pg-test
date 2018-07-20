CREATE TABLE students (id SERIAL PRIMARY KEY, first_name VARCHAR NOT NULL, last_name VARCHAR NOT NULL, grade integer NOT NULL, email VARCHAR NOT NULL UNIQUE);

INSERT INTO students (first_name, last_name, grade, email) VALUES ('Luke', 'Skywalker', 4, 'luke@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Darth', 'Vader', 4, 'anakin@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Liea', 'Organa', 4, 'liea@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Han', 'Solo', 4, 'han@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Lando', 'Calrissian', 4, 'lando@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Jabba', 'Hut', 4, 'jabba@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Boba', 'Fett', 4, 'boba@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Obi-Wan', 'Kenobi', 4, 'obi@mail.com');
