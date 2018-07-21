///////// IMPORT DEPENDENCIES ////////
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../../environments/environment'

//////// IMPORT COMPONENTS /////////
import { Student } from '../../models/student/student'



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


  //////// HTTP REQUESTS ////////

  // GET ALL
  getStudents () : Observable<Student[]> {
    return this.http.get<Student[]>(`${this.URL}/api/students`)
  }
  // GET ONE
  getStudent (id: string) : Observable<Student> {
    return this.http.get<Student>(`${this.URL}/api/students/${id}`)
  }
  // CREATE
  addStudent (student: Student) : Observable<Student> {
    return this.http.post<Student>(`${this.URL}/api/students`, student)
  }
  // UPDATE
  updateStudent (student: Student) : Observable<Student> {
    return this.http.put<Student>(`${this.URL}/api/students/${student.id}`, student)
  }
  // DELETE
  deleteStudent (id: string) : Observable<Student> {
    return this.http.delete<Student>(`${this.URL}/api/students/${id}`)
  }


}


// END
