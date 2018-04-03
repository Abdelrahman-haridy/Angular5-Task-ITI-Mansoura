import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotosService {

  constructor(private _http: Http) { }

  getPhotos(id) {
    return this._http.get('https://jsonplaceholder.typicode.com/albums/'+ id +'/photos')
    .map(res => res.json());
  }

}
