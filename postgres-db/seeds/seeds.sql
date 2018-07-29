
-- DROP TABLES ------------------------------
DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS courses;


-- STUDENTS ---------------------------------

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  grade integer NOT NULL,
  email VARCHAR NOT NULL UNIQUE
);

INSERT INTO students (first_name, last_name, grade, email) VALUES
  ('Luke', 'Skywalker', 4, 'luke@mail.com'),
  ('Darth', 'Vader', 4, 'anakin@mail.com'),
  ('Liea', 'Organa', 4, 'liea@mail.com'),
  ('Han', 'Solo', 4, 'han@mail.com'),
  ('Lando', 'Calrissian', 4, 'lando@mail.com'),
  ('Jabba', 'Hut', 4, 'jabba@mail.com'),
  ('Boba', 'Fett', 4, 'boba@mail.com'),
  ('Obi-Wan', 'Kenobi', 4, 'obi@mail.com');


-- COURSES ----------------------------------

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  room VARCHAR NOT NULL,
  course_time VARCHAR NOT NULL
);

INSERT INTO courses (title, room, course_time) VALUES
  ('English', '1A', '8:00'),
  ('Chemistry', '1B', '12:15'),
  ('History', '1C', '13:00'),
  ('Statistics', '1D', '10:30'),
  ('Algebra', '2A', '9:20'),
  ('Literature', '2B', '10:30'),
  ('Social Studies', '2C', '8:00'),
  ('Biology', '2D', '9:20');
