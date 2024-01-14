import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us-contact-us',
  templateUrl: './about-us-contact-us.component.html',
  styleUrls: ['./about-us-contact-us.component.scss']
})
export class AboutUsContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  container_title = "CONTACT";
  container_text = "Learn more about our products and services:";

  constructor(private fb:FormBuilder){
    this.contactForm=this.fb.group({
      name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      email :new FormControl('',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      message :new FormControl('',[Validators.required])
    });
  }

  get regFormControl() {
    return this.contactForm.controls;
  }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if(this.contactForm.valid){
      console.table(this.contactForm.value);
      this.contactForm.reset();
    }
    else{
      console.log("Error in sending data");
      this.contactForm.markAllAsTouched();
    }    
  }
}
