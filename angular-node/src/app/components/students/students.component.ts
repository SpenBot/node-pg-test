///////// IMPORT DEPENDENCIES ////////
import { Component, OnInit } from '@angular/core';

//////// IMPORT SCHEMA CLASSES /////////
import { Student } from '../../models/studentModel'

//////// IMPORT SERVICES /////////
import { StudentsCombinedService } from '../../services/students-combined-service/students-combined.service'



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
    private studentsCombinedService : StudentsCombinedService
  ) { }

  //// COMPONENT PROPERTIES ////
  students: Student[];

  //// ON INIT /////
  ngOnInit() {
    this.getStudents();
  }

  //// GET STUDENTS ////
  getStudents () : void {
    this.studentsCombinedService.getStudents()
      .subscribe(students => {
        this.students = students
        this.setView()
      })
  }

  //// SET VIEW ////
  setView () : void {
    this.students.map(student => {
      student.view = "condensed"
    })
  }

  //// TOGGLE LIST VIEW ////
  toggleSize(studentDiv) {
    studentDiv.view === "expanded" ? studentDiv.view = "condensed" : studentDiv.view = "expanded"
  }


}


// END
