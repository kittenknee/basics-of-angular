import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss']
})
export class LoginChildComponent {
  @Input() loginDetails!: any;

}
