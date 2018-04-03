import { Component, OnInit } from '@angular/core';
import {AlbumsService} from './../../services/albums.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css'],
  providers: [AlbumsService]
})
export class CmsComponent implements OnInit {

  albums;
  
  constructor(private _AlbumsService:AlbumsService) { }

  ngOnInit() {
    this._AlbumsService.getAlbums().subscribe(
      res => this.albums = res
    );
  }

}
