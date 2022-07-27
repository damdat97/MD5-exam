import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  students: any;

  constructor(private studentService:StudentService,
              private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })


  }

  findById(id: any) {
    this.studentService.findById(id).subscribe((data) => {
      console.log(data);
      this.students = data
    })
  }

}
