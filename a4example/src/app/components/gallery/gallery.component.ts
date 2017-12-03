import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  Photos : Photo;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getphotos().subscribe((photo) => {
      this.Photos = photo;
    });
  }

}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
