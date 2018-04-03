import { Component, OnInit } from '@angular/core';
import {PhotosService} from './../../services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotosService]
})
export class PhotosComponent implements OnInit {

  photos;
  constructor(
    private _PhotosService: PhotosService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {

    this._route.params
      .map(params => params['albumId'])
      .subscribe((id) => {
          this._PhotosService.getPhotos(id).subscribe(res => this.photos = res);
      });
  }

}
