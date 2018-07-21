///////// IMPORT DEPENDENCIES ////////
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../../environments/environment'

//////// IMPORT COMPONENTS /////////
import { Course } from '../../models/course/course'



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


}



// END
