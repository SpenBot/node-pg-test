///////// IMPORT DEPENDENCIES ////////
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../../environments/environment'

//////// IMPORT COMPONENTS /////////
import { Course } from '../../schemas/courseSchema'



//////// INJECTION DECORATOR ///////
@Injectable({
  providedIn: 'root'
})


//////// SERVICE CLASS ////////
export class CoursesService {

  //// CONSTRUCTOR ////
  constructor(
    private http: HttpClient
  ) { }

  //// API ROUTE ////
  private URL = environment.nodeApiUrl


  //////// HTTP REQUESTS ////////

  // GET ALL
  getCourses () : Observable<Course[]> {
    return this.http.get<Course[]>(`${this.URL}/api/courses`)
  }
  // GET ONE
  getCourse (id: string) : Observable<Course> {
    return this.http.get<Course>(`${this.URL}/api/courses/${id}`)
  }
  // CREATE
  addCourse (course: Course) : Observable<Course> {
    return this.http.post<Course>(`${this.URL}/api/courses`, course)
  }
  // UPDATE
  updateCourse (course: Course) : Observable<Course> {
    return this.http.put<Course>(`${this.URL}/api/courses/${course.id}`, course)
  }
  // DELETE
  deleteCourse (id: string) : Observable<Course> {
    return this.http.delete<Course>(`${this.URL}/api/courses/${id}`)
  }


}



// END
