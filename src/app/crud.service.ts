import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoListing } from './todoList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = "http://localhost:3000/todo";

  constructor(private http: HttpClient) { }

  getToDo(): Observable<ToDoListing[]>{
    return this.http.get<ToDoListing[]>(this.url);
  }

  addToDo(toDoList: ToDoListing): Observable<ToDoListing>{
    return this.http.post<ToDoListing>(this.url, toDoList);
  }

  getToDobyID(id: Number): Observable<ToDoListing> {
    const apiUrl = `${this.url}/${id}`;
    return this. http.get<ToDoListing>(apiUrl);
  }

  updateToDo(toDoList: any): Observable<any> {
    const apiUrl = `${this.url}/${toDoList.id}`;
    return this.http.put<any>(apiUrl, toDoList);
  }

  deleteToDo(id: Number): Observable<void> {
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<void>(apiUrl);
  }
}
