import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  container_title = "User Details";
  container_text = "Find all your details here...";
  isCredEdit = false;
  currentId!: number;
  userDetails:any = [];

  constructor(private credDetail: CredentialsService){}

  viewCreds(){
    this.isCredEdit = true;
  }
  hideCreds(){
    this.isCredEdit = false;
  }

  editCredentials(){

  }

  saveCredentials(){
    
  }

  editDetails(){

  }

  ngOnInit(){
    this.credDetail.getCredential().subscribe((allCreds) => {
      console.log("All credentials", allCreds);
      this.currentId = allCreds.find(
        
      )
    });
    this.credDetail.getCredentialbyID(this.currentId).subscribe((data) => {
      this.userDetails = data;
    })
  }
}
