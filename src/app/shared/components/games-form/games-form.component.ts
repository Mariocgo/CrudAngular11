import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Games } from '../../models/games.interface';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.scss']
})
export class GamesFormComponent implements OnInit {

  juegos: Games = null;
  GameForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.juegos = navigation?.extras?.state?.value;
    this.initForm();
   }

  ngOnInit(): void {
    if(typeof this.juegos == 'undefined'){
      this.router.navigate(['new']);
    }else{
      this.GameForm.patchValue(this.juegos)
    }
  }

  onSave(): void{
    console.log('Guardado', this.GameForm);
  }

  onGoBackToList(): void{
    this.router.navigate(['Games'])
  }

  private initForm():void{
    this.GameForm = this.fb.group({
      nombre:['',[Validators.required]],
      desarrolladora:['',[Validators.required]],
      plataforma:['',[Validators.required]],
      disponible:['',[Validators.required]],
      fechadeSalida:['',[Validators.required]], 
    })

  }

}
