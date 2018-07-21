import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';

import { HomepageComponent } from './components/homepage/homepage.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomepageComponent,
    StudentDetailComponent,
    AddStudentComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
