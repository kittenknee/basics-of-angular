import { Component } from '@angular/core';
import { GalleryAlbums } from 'src/assets/gallery_album';

@Component({
  selector: 'app-gallery-one',
  templateUrl: './gallery-one.component.html',
  styleUrls: ['./gallery-one.component.scss']
})
export class GalleryOneComponent {
  container_title = "Gallery Content";

  galleryAlbum = GalleryAlbums;

}
