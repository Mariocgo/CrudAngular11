import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Games } from 'src/app/shared/models/games.interface';

@Component({
  selector: 'app-edit',
  templateUrl: `<app-games-form></app-games-form>`,
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  
}
