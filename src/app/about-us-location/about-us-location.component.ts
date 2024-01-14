import { Component } from '@angular/core';
import { Locations } from 'src/assets/locations';

@Component({
  selector: 'app-about-us-location',
  templateUrl: './about-us-location.component.html',
  styleUrls: ['./about-us-location.component.scss']
})
export class AboutUsLocationComponent {
  container_title = "LOCATION";
  container_subheading = "Find Us Here";
  container_text = "Connect with us at any of our global offices.";
  details!: any;
  location_name!: string;

  locations = Locations;

  selectLocation(index: string | any){
    console.log(this.locations[index]);
    this.details! = this.locations[index];
    this.location_name = this.details.name;
    console.table(this.details);
    console.log(this.location_name)
  }
}
