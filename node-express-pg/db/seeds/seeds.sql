DROP TABLE IF EXISTS students;

CREATE TABLE students (id SERIAL PRIMARY KEY, first_name VARCHAR NOT NULL, last_name VARCHAR NOT NULL, grade integer NOT NULL, email VARCHAR NOT NULL UNIQUE);

INSERT INTO students (first_name, last_name, grade, email) VALUES ('Luke', 'Skywalker', 4, 'luke@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Darth', 'Vader', 4, 'anakin@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Liea', 'Organa', 4, 'liea@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Han', 'Solo', 4, 'han@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Lando', 'Calrissian', 4, 'lando@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Jabba', 'Hut', 4, 'jabba@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Boba', 'Fett', 4, 'boba@mail.com');
INSERT INTO students (first_name, last_name, grade, email) VALUES ('Obi-Wan', 'Kenobi', 4, 'obi@mail.com');

DROP TABLE IF EXISTS courses;

CREATE TABLE courses (id SERIAL PRIMARY KEY, title VARCHAR NOT NULL, room VARCHAR NOT NULL, class_time VARCHAR NOT NULL);

INSERT INTO courses (title, room, class_time) VALUES ('English', '1A', '8:00');
INSERT INTO courses (title, room, class_time) VALUES ('Chemistry', '1B', '12:15');
INSERT INTO courses (title, room, class_time) VALUES ('History', '1C', '13:00');
INSERT INTO courses (title, room, class_time) VALUES ('Statistics', '1D', '10:30');
INSERT INTO courses (title, room, class_time) VALUES ('Algebra', '2A', '9:20');
INSERT INTO courses (title, room, class_time) VALUES ('Literature', '2B', '10:30');
INSERT INTO courses (title, room, class_time) VALUES ('Social Studies', '2C', '8:00');
INSERT INTO courses (title, room, class_time) VALUES ('Biology', '2D', '9:20');
