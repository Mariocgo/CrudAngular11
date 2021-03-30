import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {GamesFormComponent} from './games-form.component'


@NgModule({
  declarations: [GamesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[GamesFormComponent]
})
export class GamesFormModule { }
