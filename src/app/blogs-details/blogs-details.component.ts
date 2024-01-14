import { Component } from '@angular/core';
import { BlogsList } from 'src/assets/blogs';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.scss']
})
export class BlogsDetailsComponent {
  container_title = "All Blogs";
  blogList = BlogsList;

}
