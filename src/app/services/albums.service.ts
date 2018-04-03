import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private _http: Http) { }

  getAlbums() {
    return this._http.get('https://jsonplaceholder.typicode.com/albums')
      .map(res => res.json());
  }

}
