import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import data from '../assets/todo.json';

@Injectable({
  providedIn: 'root'
})
export class TodolistService implements OnInit {
  index!: number;
  constructor(private http: HttpClient) { }

  url: string = "http://10.0.53.77:3000/todos";

  getList(){
    return this.http.get("assets/todo.json").subscribe((res:any)=>{
      
    });
  }

  getEntry(){
    return this.http.get(this.url[this.index])
  }

  deleteEntry(index: string | number){

  }

  updateEntry(){
    this.http.put("assets/todo.json", this.updateEntry)
    
  }

  ngOnInit(): void {
    this.getList();
  }
}
