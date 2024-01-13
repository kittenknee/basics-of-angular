import { Component } from '@angular/core';
import { BlogsList } from 'src/assets/blogs';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  container_title = "BLOGS";
  main_title = "Recent Posts";

  blog_posts = BlogsList;
}
