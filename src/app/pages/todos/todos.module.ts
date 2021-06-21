import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatCheckboxModule } from '@angular/material';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    TodosComponent
  ]
})

export class TodosModule {}