import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  container_title = "LOGIN";
  container_text = "Login here if you already have an account";
  uname="";
  pword="";
  validateErrorMsg = false;
  displayLoginCreds = false;
  allEntry!: {uname: string; pword: string};

  constructor(private fb:FormBuilder, private auth: AuthService, private route: Router){
    this.loginForm = this.fb.group({
      uname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      pword: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  get regFormControl() {
    return this.loginForm.controls;
  }

  ngOnInit() { }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      console.table(this.loginForm.value);
      let res = this.auth.loginValidate(this.uname, this.pword);
      if (res === 200){
        this.auth.isAuth = true;
        sessionStorage.setItem("Username", this.loginForm.value.uname);
        sessionStorage.setItem("Password", this.loginForm.value.pword);
        this.route.navigate(['dashboard']);
        this.loginForm.reset();
        
        console.log("Success", sessionStorage.getItem('Username'), sessionStorage.getItem('Password'))
      }
      else if(res === 403){
        this.auth.isAuth = false;
        this.validateErrorMsg = true;
        console.log("The login failed");
        this.loginForm.reset();
        
      }
    } 
  }
}
