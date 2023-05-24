import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicStorageService {
  urlComments = 'http://localhost:3000/comments';
  urlSignUps = 'http://localhost:3000/signups';
  urlTables = 'http://localhost:3000/tables';
  constructor(private http: HttpClient) { } v
  // Contact Form
  getUserComments() {
    return this.http.get(this.urlComments);
  }

  postUserComments(comments: any) {
    return this.http.post(this.urlComments, comments);
  }
  // Sign up form
  getUserSignUps() {
    return this.http.get(this.urlSignUps);
  }

  postUserSignUps(signupData: any) {
    return this.http.post(this.urlSignUps, signupData);
  }

  // API methods for dashboard table
  postTable(data: any) {
    return this.http.post<any>(this.urlTables, data).pipe(map((res: any) => {
      return res;
    }))
  }
  getTable() {
    return this.http.get<any>(this.urlTables).pipe(map((res: any) => {
      return res;
    }))
  }
  updateTable(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/tables/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  deleteFromTable(id: number) {
    return this.http.delete<any>("http://localhost:3000/tables/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
