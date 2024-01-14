import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationDetailsService } from '../registration-details.service';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  container_title = "REGISTER";
  container_text = "Register here for a new account";

  registerForm!:FormGroup;
  submitted = false;
  validateErrorMsg = false;
  registrationDetails: any[] = [];

  fname="";
  lname="";
  email="";
  mobile="";
  add="";
  uname="";
  pword="";
  rpword="";
  check="";

  ViewData: any;
  totalUsers!: number;

  constructor(private fb:FormBuilder, private route:Router, private regDetails: RegistrationDetailsService, private credService: CredentialsService) {
    this.registerForm = this.fb.group({
      fname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
      lname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      add: new FormControl('', [Validators.required]),
      uname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
      pword: new FormControl('', [Validators.required]),
      rpword: new FormControl('', [Validators.required,]),
      check: new FormControl('', [Validators.required])
    })
  }
  get regFormControls(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.valid){
      console.table(this.registerForm.value);
      this.registrationDetails = this.registerForm.value;
      console.table(this.registrationDetails);
      this.registerDetails.emit(this.registrationDetails);
      this.addCredential(this.registrationDetails);
      this.registerForm.reset();
      // this.route.navigate(['login']);
      console.log('Success');

    }
    else{
      this.validateErrorMsg = true;
      setTimeout(() => {
        this.validateErrorMsg = false
      }, 3000);
      this.registerForm.markAllAsTouched();
      console.log('The registeration failed');
      this.registerForm.reset();
    }
  }

  ngOnInit() {
    console.log('register card is called')
    this.regDetails.getRegDetails$.subscribe((data: any) => {
      this.ViewData = data;
      this.setValues();
    })
    this.getTotalID();
  }

  setValues(){
    let entries = {
      fname: this.ViewData.fname,
      lname: this.ViewData.lname,
      mobile: this.ViewData.mobile,
      email: this.ViewData.email,
      add: this.ViewData.add,
      uname: this.ViewData.uname,
      pword: this.ViewData.pword,
      rpword: this.ViewData.rpword,
      check: this.ViewData.check
    };
    this.registerForm.setValue(entries);
  }

  getTotalID(){
    this.credService.getCredential().subscribe((data) => {
      let somedata = data;
      this.totalUsers=0;
      for(const entry of somedata){
        this.totalUsers++;
      }
      console.log('Total users = ', this.totalUsers)
      return this.totalUsers;
    })
  }

  addCredential(data: any){
    const addData = {
      id: this.totalUsers + 1,
      uname: data.uname,
      pword: data.pword
    }
    console.log(addData);
    this.credService.addCredential(addData)
    this.credService.addCredential(addData).subscribe((data) => {
      alert("Registered Successfully");
      this.getTotalID();
    })
    console.log('Executed CredService add');
  }

  @Output() registerDetails = new EventEmitter <any> ();

  
}
