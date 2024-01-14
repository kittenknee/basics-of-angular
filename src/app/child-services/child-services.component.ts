import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-services',
  templateUrl: './child-services.component.html',
  styleUrls: ['./child-services.component.scss']
})
export class ChildServicesComponent {
  @Input() data!: any;

}
