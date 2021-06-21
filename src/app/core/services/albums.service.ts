import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}