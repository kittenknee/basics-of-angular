import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
  
})
export class DataDisplayComponent implements OnInit {
  container_title = "Display Selected Data";
  @Input() sentData!: any;


  constructor(private todo: TodolistService) {}

  updatedData: any ={
    "title":"",
    "completed":""
  }

  // save(){
  //   console.table(this.updatedData)
  // }

  ngOnInit(){
    this.todo.getList()
  }

  @Output() updateData = new EventEmitter();

  save(updatedData: string) {
    this.updateData.emit(updatedData);
    // this.updateData.emit(completed);
    console.table(this.updatedData)
  }

}
