import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(API_URL + '/students');
  }

  saveStudent(student: any): Observable<Student> {
    return this.http.post<Student>(API_URL + '/students', student);
  }

  findById(id: number): Observable<Student> {
    return this.http.get<Student>(`${API_URL}/students/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${API_URL}/students/${id}`, student);
  }

  deleteCity(id: number): Observable<Student> {
    return this.http.delete<Student>(`${API_URL}/students/${id}`);
  }
}
