import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'One-page_website';
  a = 1;

  constructor( private route: Router){}
  
  // Decide to display which component
  tabActive(){
    if(this.a =1){
      this.route.navigate(["/home"])
    }
  }
}

