import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.scss']
})
export class DatabasesComponent{

  JSONData = true;
  LiveData = false;

  showJSON(){
    this.JSONData = true;
    this.LiveData = false;
  }

  showLive(){
    this.JSONData = false;
    this.LiveData = true;
  }

  showNone(){
    this.JSONData = false;
    this.LiveData = false;
  }

}
