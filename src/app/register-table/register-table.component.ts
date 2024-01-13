import { Component, Input, OnInit } from '@angular/core';
import { RegistrationDetailsService } from '../registration-details.service';
@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrls: ['./register-table.component.scss']
})
export class RegisterTableComponent implements OnInit {
  container_title = "Registered Data Table";
  initialEntry: any[] = [];
  updatedEntry!: any;
  entryData!: any;

  fname="";
  lname="";
  email="";
  mobile="";
  add="";
  uname="";
  pword="";
  rpword="";
  check="";

  @Input() receivingData: any[] = [];

  constructor(private regDetails: RegistrationDetailsService){
    // regDetails.receivingRegDetails$.subscribe((data: any) => {
    //   this.updatedEntry.push(data)
    // })
  }

  ngOnInit(): void {
    console.log(this.receivingData)
  }

  // data.editing = false;
  currentlyEditingIndex: number | null = null;
  
  edit(data: any){
    if (this.currentlyEditingIndex !== null) {
      this.receivingData[this.currentlyEditingIndex].editing = false;
    }
    this.currentlyEditingIndex = this.receivingData.indexOf(data);
    
    data.editing = true;
    this.initialEntry[data.id] = {...data};
  }

  save(data: any){
    // console.log('save is being called');
    this.updatedEntry = data;
    console.table(this.updatedEntry);
    this.regDetails.setRegDetails(data);
    data.editing = false;
    this.currentlyEditingIndex = null;
  }

  cancel(data:any){
    Object.assign(data, this.initialEntry[data.id]);
    data.editing = false;
    this.currentlyEditingIndex = null;
  }
}
