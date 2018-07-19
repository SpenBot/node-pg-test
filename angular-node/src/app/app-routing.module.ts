///////// IMPORT DEPENDENCIES ////////
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

///////// IMPORT COMPONENTS ////////
import { HomepageComponent } from './components/homepage/homepage.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';



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
