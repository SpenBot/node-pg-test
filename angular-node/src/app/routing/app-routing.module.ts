///////// IMPORT DEPENDENCIES ////////
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

///////// IMPORT COMPONENTS ////////
import { HomepageComponent } from '../components/homepage/homepage.component';

import { StudentsComponent } from '../components/students/students.component';
import { StudentDetailComponent } from '../components/student-detail/student-detail.component';
import { AddStudentComponent } from '../components/add-student/add-student.component';

import { CoursesComponent } from '../components/courses/courses.component';
import { CourseDetailComponent } from '../components/course-detail/course-detail.component';
import { AddCourseComponent } from '../components/add-course/add-course.component';



//////// ROUTES ///////
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'students/:id',
    component: StudentDetailComponent
  },
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent
  },
  {
    path: 'add-course',
    component: AddCourseComponent
  }
]


//////// MODULE DECORATOR ///////
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})


//////// CLASS MODULE ///////
export class AppRoutingModule { }



// END
