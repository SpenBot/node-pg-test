///////// IMPORT DEPENDENCIES ////////
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//////// IMPORT SCHEMA CLASSES /////////
import { Student } from '../../models/student/student'

//////// IMPORT SERVICES /////////
import { StudentsService } from '../../services/students-service/students.service'


//////// COMPONENT DECORATOR ///////
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})


//////// COMPONENT CLASS ////////
export class AddStudentComponent implements OnInit {

  //// CONSTRUCTOR ////
  constructor(
      private router: Router,
      private studentsService : StudentsService
  ) { }

  //// COMPONENT PROPERTIES ////
  student: Student

  //// ON INIT /////
  ngOnInit() {
    this.student = new Student()
  }

  //// CLICK ADD ////
  clickAdd () : void {
    this.studentsService.addStudent(this.student)
      .subscribe( () => {
        alert(`Added Student : ${this.student.first_name} ${this.student.last_name}`)
        this.router.navigate(['students'])
      })
  }

}



// END
