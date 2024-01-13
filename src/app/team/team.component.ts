import { Component } from '@angular/core';
import { MembersCarousel } from 'src/assets/team_members';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  container_title = "MEET THE TEAM";
  main_title = "People Behind Our Success";
  qoute = "Cornerstone of our company";
  message = "Our team draws on broad industry experience and networks to create the most powerful outcomes for our client. KeyPoint Technologies is fortunate to have found the right blend of leadership which has helped the organization hold steady, on the path of success."
  
  team_members = MembersCarousel;
}
