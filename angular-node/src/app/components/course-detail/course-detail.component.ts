///////// IMPORT DEPENDENCIES ////////
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

//////// IMPORT SCHEMA CLASSES /////////
import { Course } from '../../models/courseModel'

//////// IMPORT SERVICES /////////
import { CoursesService } from '../../services/courses-service/courses.service'



//////// COMPONENT DECORATOR ///////
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})


//////// COMPONENT CLASS ////////
export class CourseDetailComponent implements OnInit {

  //// CONSTRUCTOR ////
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService : CoursesService
  ) { }

  //// COMPONENT PROPERTIES ////
  course: Course;

  //// ON INIT /////
  ngOnInit() {
    this.getCourse();
  }

  //// GET COURSE ////
  getCourse () : void {
    const id = this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourse(id)
      .subscribe(course => {
        this.course = course
      })
  }

  //// CLICK SAVE ////
  clickSave () : void {
    this.coursesService.updateCourse(this.course)
      .subscribe(course => {
        alert(`Changes to COURSE
          \t id: ${this.course.id}
          \t title: ${this.course.title}
          has been updated.`)
      })
  }


  //// CLICK DELETE ////
  clickDelete () : void {
    this.coursesService.deleteCourse(this.course.id)
      .subscribe( () => {
        alert(`Deleted Course
          \t id: ${this.course.id}
          \t title: ${this.course.title}`
        )
        this.router.navigate(['courses'])
      })
  }


}



// END
