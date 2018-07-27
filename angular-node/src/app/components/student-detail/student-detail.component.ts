///////// IMPORT DEPENDENCIES ////////
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

//////// IMPORT SCHEMA CLASSES /////////
import { Student } from '../../models/student/student'

//////// IMPORT SERVICES /////////
import { StudentsService } from '../../services/students-service/students.service'



//////// COMPONENT DECORATOR ///////
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})



//////// COMPONENT CLASS ////////
export class StudentDetailComponent implements OnInit {

  //// CONSTRUCTOR ////
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService : StudentsService
  ) { }

  //// COMPONENT PROPERTIES ////
  student: Student;

  //// ON INIT /////
  ngOnInit() {
    this.getStudent();
  }

  //// GET STUDENT ////
  getStudent () : void {
    const id = this.route.snapshot.paramMap.get('id');

    this.studentsService.getStudent(id)
      .subscribe(student => {
        console.log(student)
        this.student = student
      })
  }

  //// CLICK SAVE ////
  clickSave () : void {
    this.studentsService.updateStudent(this.student)
      .subscribe(student => {
        alert(`Changes to STUDENT
          \t id: ${this.student.id} :
          \t name: ${this.student.first_name} ${this.student.last_name}
          has been updated.`)
      })
  }

  //// CLICK DELETE ////
  clickDelete () : void {
      this.studentsService.deleteStudent(this.student.id)
        .subscribe( () => {
          alert(`Deleted STUDENT
            \t id: ${this.student.id}
            \t name: ${this.student.first_name} ${this.student.last_name}`
          )
          this.router.navigate(['students'])
        })
  }


}



// END
