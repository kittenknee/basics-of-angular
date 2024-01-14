import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from './credentials';
import { CredentialsService } from './credentials.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  isAuth: boolean;
  credList: Credentials[] = [];
  UserID!: number;
  unameEntered!: string;
  pwordEntered!: string;

  constructor(private route: Router, private credService: CredentialsService) {
    this.isAuth = false;
  }

  loginValidate(unameEntered: string, pwordEntered: string){
    this.credService.getCredential().subscribe((data) => {
      this.credList = data;
      console.table(this.credList)
    })
    if(this.credList.length > 0){
      for(const cred of this.credList){
        if(cred.uname == unameEntered && cred.pword === pwordEntered){
          this.isAuth = true;
          console.log(this.isAuth);
          return 200;
        }
      }
      if(!this.isAuth){
        this.isAuth = false;
        console.log(this.isAuth);
        return 403;
      }
    }    
    console.log('Error 404')
    return 404;
  }

  logout(){
    this.route.navigate(['login']);
  }
}
