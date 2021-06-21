import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FlexLayoutModule,
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {}