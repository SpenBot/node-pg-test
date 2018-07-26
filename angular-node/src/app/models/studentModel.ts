export class Student {

  id: string;
  first_name: string;
  last_name: string;
  grade: string;
  email: string;

  enrollments: any[];

  view: string;

  constructor () {
    this.id = null;
    this.first_name = '';
    this.last_name = '';
    this.grade = '';
    this.email = '';
    this.enrollments = [];
  }

}
