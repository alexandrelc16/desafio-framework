import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { AlbumsComponent } from './albums.component';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    AlbumsComponent
  ]
})

export class AlbumsModule {}