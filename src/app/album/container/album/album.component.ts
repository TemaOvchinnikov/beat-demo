import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  public albums: Album[];

  constructor() {
    this.albums = [];
  }

  ngOnInit(): void {
    this.albums = [
      {
        album_image: '/assets/extra-images/latest-album-1.jpg',
        album_count: 3,
        album_title: 'album_title1',
      },
      {
        album_image: '/assets/extra-images/latest-album-2.jpg',
        album_count: 4,
        album_title: 'album_title2',
      },
      {
        album_image: '/assets/extra-images/latest-album-3.jpg',
        album_count: 2,
        album_title: 'album_title2',
      },
      {
        album_image: '/assets/extra-images/latest-album-4.jpg',
        album_count: 3,
        album_title: 'album_title2',
      },
      {
        album_image: '/assets/extra-images/latest-album-1.jpg',
        album_count: 3,
        album_title: 'album_title1',
      },
      {
        album_image: '/assets/extra-images/latest-album-2.jpg',
        album_count: 4,
        album_title: 'album_title2',
      },
      {
        album_image: '/assets/extra-images/latest-album-3.jpg',
        album_count: 2,
        album_title: 'album_title2',
      },
      {
        album_image: '/assets/extra-images/latest-album-4.jpg',
        album_count: 3,
        album_title: 'album_title2',
      },
    ];
  }
}
