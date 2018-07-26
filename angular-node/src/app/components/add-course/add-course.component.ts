///////// IMPORT DEPENDENCIES ////////
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//////// IMPORT SCHEMA CLASSES /////////
import { Course } from '../../models/courseModel'

//////// IMPORT SERVICES /////////
import { CoursesService } from '../../services/courses-service/courses.service'


//////// COMPONENT DECORATOR ///////
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})


//////// COMPONENT CLASS ////////
export class AddCourseComponent implements OnInit {

  //// CONSTRUCTOR ////
  constructor(
      private router: Router,
      private coursesService : CoursesService
  ) { }

  //// COMPONENT PROPERTIES ////
  course: Course

  //// ON INIT /////
  ngOnInit() {
    this.course = new Course()
  }

  //// CLICK ADD ////
  clickAdd () : void {
    this.coursesService.addCourse(this.course)
      .subscribe( () => {
        alert(`Added Course : ${this.course.title}`)
        this.router.navigate(['courses'])
      })
  }

}



// END
