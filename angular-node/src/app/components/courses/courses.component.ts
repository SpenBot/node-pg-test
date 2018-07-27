///////// IMPORT DEPENDENCIES ////////
import { Component, OnInit } from '@angular/core';

//////// IMPORT SCHEMA CLASSES /////////
import { Course} from '../../models/courseModel'

//////// IMPORT SERVICES /////////
import { CoursesService } from '../../services/courses-service/courses.service'



//////// COMPONENT DECORATOR ///////
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})



//////// COMPONENT CLASS ////////
export class CoursesComponent implements OnInit {

  //// CONSTRUCTOR ////
  constructor(
    private coursesService : CoursesService
  ) { }

  //// COMPONENT PROPERTIES ////
  courses: Course[];

  //// ON INIT /////
  ngOnInit() {
    this.getCourses();
  }

  //// GET STUDENTS ////
  getCourses () : void {
    this.coursesService.getCourses()
      .subscribe(courses => {
        this.courses = courses
      })
  }

}
