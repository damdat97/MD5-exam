import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe((students) => {
      console.log(students)
      this.students = students;
    }, error => {
      console.log(error)
    });
  }

  deleteStudent(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.studentService.deleteCity(id).subscribe(() => {
        alert("Ok");
        this.getAll()
      }, e => {
        console.log(e);
      });
    }
  }
}
