import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentCreateComponent } from './component/student/student-create/student-create.component';
import { StudentEditComponent } from './component/student/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student/student-delete/student-delete.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { StudentDetailComponent } from './component/student/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    StudentDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
