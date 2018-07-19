///////// IMPORT DEPENDENCIES ////////
import { Component, OnInit } from '@angular/core';

//////// IMPORT SCHEMA CLASSES /////////
import { Student } from './student/student'

//////// IMPORT SERVICES /////////
import { StudentsService } from '../../services/students.service'

//////// COMPONENT DECORATOR ///////
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

//////// COMPONENT CLASS ////////
export class StudentsComponent implements OnInit {

  //// CONSTRUCTOR ////
  constructor(
    private studentsService : StudentsService
  ) { }

  //// COMPONENT PROPERTIES ////
  students: Student[];

  //// ON INIT /////
  ngOnInit() {
    this.getStudents();
  }

  //// GET STUDENTS ////
  getStudents () : void {
    this.studentsService.getStudents()
    .subscribe(students => {
      this.students = students
    })
  }

}
