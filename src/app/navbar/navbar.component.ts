import { identifierName } from '@angular/compiler';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean;

  constructor(private auth: AuthService){
    this.isAuth = this.auth.isAuth;
  }

  isNotAuth(){
    this.isAuth = false;
    this.auth.isAuth = this.isAuth;
  }

  ngOnInit(): void {
    this.auth.isAuth = this.isAuth;
    console.log(this.isAuth)
  }
}
