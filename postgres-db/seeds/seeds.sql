
-- SCHEMA ------------------------------
-- CREATE SCHEMA IF NOT EXISTS seq_schema;



-- DROP TABLES ------------------------------

DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS enrollments;



-- STUDENTS ---------------------------------

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  grade INTEGER NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
);

INSERT INTO students (first_name, last_name, grade, email, created_at, updated_at) VALUES
  ('Eric', 'Cartman', 4, 'eric@mail.com', current_timestamp, current_timestamp),
  ('Kenny', 'McCormick', 4, 'kenny@mail.com', current_timestamp, current_timestamp),
  ('Kyle', 'Broflovski', 4, 'kyle@mail.com', current_timestamp, current_timestamp),
  ('Stan', 'Marsh', 4, 'stan@mail.com', current_timestamp, current_timestamp),
  ('Luke', 'Skywalker', 4, 'luke@mail.com', current_timestamp, current_timestamp),
  ('Darth', 'Vader', 4, 'anakin@mail.com', current_timestamp, current_timestamp),
  ('Liea', 'Organa', 4, 'liea@mail.com', current_timestamp, current_timestamp),
  ('Han', 'Solo', 4, 'han@mail.com', current_timestamp, current_timestamp),
  ('Lando', 'Calrissian', 4, 'lando@mail.com', current_timestamp, current_timestamp),
  ('Jabba', 'Hut', 4, 'jabba@mail.com', current_timestamp, current_timestamp),
  ('Boba', 'Fett', 4, 'boba@mail.com', current_timestamp, current_timestamp),
  ('Obi-Wan', 'Kenobi', 4, 'obi@mail.com', current_timestamp, current_timestamp);



-- -- COURSES ----------------------------------
--
-- CREATE TABLE courses (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR NOT NULL,
--   room VARCHAR NOT NULL,
--   class_time VARCHAR NOT NULL,
--   created_at timestamp NOT NULL,
--   updated_at timestamp NOT NULL
-- );
--
-- INSERT INTO courses (title, room, class_time, created_at, updated_at) VALUES
--   ('English', '1A', '8:00', current_timestamp, current_timestamp),
--   ('Chemistry', '1B', '12:15', current_timestamp, current_timestamp),
--   ('History', '1C', '13:00', current_timestamp, current_timestamp),
--   ('Statistics', '1D', '10:30', current_timestamp, current_timestamp),
--   ('Algebra', '2A', '9:20', current_timestamp, current_timestamp),
--   ('Literature', '2B', '10:30', current_timestamp, current_timestamp),
--   ('Social Studies', '2C', '8:00', current_timestamp, current_timestamp),
--   ('Biology', '2D', '9:20', current_timestamp, current_timestamp);




-- COURSES ----------------------------------

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  room VARCHAR NOT NULL,
  course_time VARCHAR NOT NULL,
  teacher_id INTEGER NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
);

INSERT INTO courses (title, room, course_time, teacher_id, created_at, updated_at) VALUES
  ('English', '1A', '8:00', 1, current_timestamp, current_timestamp),
  ('Chemistry', '1B', '12:15', 1, current_timestamp, current_timestamp),
  ('History', '1C', '13:00', 1, current_timestamp, current_timestamp),
  ('Statistics', '1D', '10:30', 2, current_timestamp, current_timestamp),
  ('Algebra', '2A', '9:20', 2, current_timestamp, current_timestamp),
  ('Literature', '2B', '10:30', 2, current_timestamp, current_timestamp),
  ('Social Studies', '2C', '8:00', 3, current_timestamp, current_timestamp),
  ('Biology', '2D', '9:20', 3, current_timestamp, current_timestamp);



-- TEACHERS ----------------------------------

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL
);

INSERT INTO teachers (name, created_at, updated_at) VALUES
  ('Mr Garrison', current_timestamp, current_timestamp),
  ('Mr Hand', current_timestamp, current_timestamp),
  ('Mr Mackey', current_timestamp, current_timestamp);



-- ENROLLMENTS --------------------------------

CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  course_id INT,
  student_id INT,
  created_at timestamp NOT NULL,
  updated_at timestamp NOT NULL,
  FOREIGN KEY (course_id) REFERENCES courses(id),
  FOREIGN KEY (student_id) REFERENCES students(id)
);

INSERT INTO enrollments (course_id, student_id, created_at, updated_at) VALUES
  (1, 1, current_timestamp, current_timestamp),
  (2, 1, current_timestamp, current_timestamp),
  (3, 1, current_timestamp, current_timestamp),
  (1, 2, current_timestamp, current_timestamp),
  (2, 2, current_timestamp, current_timestamp),
  (1, 3, current_timestamp, current_timestamp),
  (2, 3, current_timestamp, current_timestamp),
  (3, 3, current_timestamp, current_timestamp),
  (4, 4, current_timestamp, current_timestamp),
  (5, 4, current_timestamp, current_timestamp),
  (4, 5, current_timestamp, current_timestamp),
  (5, 5, current_timestamp, current_timestamp),
  (6, 6, current_timestamp, current_timestamp),
  (6, 7, current_timestamp, current_timestamp),
  (7, 7, current_timestamp, current_timestamp),
  (7, 8, current_timestamp, current_timestamp),
  (8, 8, current_timestamp, current_timestamp);
