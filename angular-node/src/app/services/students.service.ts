///////// IMPORT DEPENDENCIES ////////
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment'

//////// IMPORT COMPONENTS /////////
import { StudentsComponent } from '../components/students/students.component'
import { Student } from '../components/students/student/student'


//////// INJECTION DECORATOR ///////
@Injectable({
  providedIn: 'root'
})

//////// SERVICE CLASS ////////
export class StudentsService {

  //// CONSTRUCTOR ////
  constructor(
    private http: HttpClient
  ) { }

  //// API ROUTE ////
  private URL = environment.nodeApiUrl

  //// HTTP REQUESTS ////
  getStudents () : Observable<Student[]>{
    return this.http.get<Student[]>(this.URL + '/api/students')
  }


}
