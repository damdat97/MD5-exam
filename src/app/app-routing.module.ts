import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "./component/student/student-list/student-list.component";
import {StudentCreateComponent} from "./component/student/student-create/student-create.component";
import {StudentEditComponent} from "./component/student/student-edit/student-edit.component";
import {StudentDeleteComponent} from "./component/student/student-delete/student-delete.component";
import {StudentDetailComponent} from "./component/student/student-detail/student-detail.component";

const routes: Routes = [
  {
  path: '',
  component: StudentListComponent
  },
  {
    path: 'create',
    component: StudentCreateComponent
  },
  {
    path: 'edit/:id',
    component: StudentEditComponent
  },
  {
    path: 'delete/:id',
    component: StudentDeleteComponent
  },
  {
    path: 'student-detail/:id',
    component: StudentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
