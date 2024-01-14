import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registrationData: any[] = [];

  getData(data: any){
    // console.log('Is it called?')
    this.registrationData.push(data);
    console.table(this.registrationData)
  }
}
