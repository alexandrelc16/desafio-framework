import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/core/services/albums.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Albums, Photos } from 'src/app/model/albums.interface';
import { Users } from 'src/app/model/users.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {

  albums: Albums[];
  users: Users[];
  completeAlbums: {album: Albums, user: Users}[] = [];
  photos: Photos[];
  albumPhotos: [];
  selectedAlbum: Albums;

  constructor(
    private albumsService: AlbumsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.showAlbums();
  }

  private showAlbums() {
    this.albumsService.getAlbums()
      .subscribe(
        (data: Albums[]) => {
          this.albums = data;
          this.getPhotos();
        },
        (error) => console.log(error)
      );
  }

  private getPhotos() {
    this.albumsService.getPhotos()
      .subscribe(
        (data: Photos[]) => {
          this.photos = data;
          this.getUsers();
        },
        (error) => console.log(error)
      );
  }

  private getUsers() {
    this.usersService.getUsers()
      .subscribe(
        (data: Users[]) => {
          this.users = data;
          this.setCompleteAlbums();
        },
        (error) => console.log(error)
      );
  }

  private setCompleteAlbums() {
    this.albums.map(album => {
      this.photos.map(photo => {
        if (album.id === photo.albumId)
          album.photos ? album.photos.push(photo) : album.photos = [];
      })
    });

    this.users.map(user => 
      this.albums.map(album => {
        if (album.userId === user.id)
          this.completeAlbums.push({
            album: album,
            user: user
          })
      })
    );
  }

  showPhotos(album: Albums) {
    this.selectedAlbum = album;
  }

  backToAlbums() {
    this.selectedAlbum = null;
  }
}
