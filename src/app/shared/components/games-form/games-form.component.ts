import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideogamesService } from 'src/app/pages/videogames/videogames.service';
import { Games } from '../../models/games.interface';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.scss']
})
export class GamesFormComponent implements OnInit {

  juegos: Games = null;
  GameForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private gamesSvc: VideogamesService) {
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
    if(this.GameForm.valid){
      const game = this.GameForm.value;
      const gameId = this.juegos?.id || null;
      this.gamesSvc.onSaveGames(game, gameId);
      this.GameForm.reset();
    }

  }

  onGoBackToList(): void{
    this.router.navigate(['Games'])
  }

  isValidField(field: string):string{
    const validatedField = this.GameForm.get(field);
    return (!validatedField.valid && validatedField.touched)
    ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }


  private initForm():void{
    this.GameForm = this.fb.group({
      nombre:['',[Validators.required]],
      desarrolladora:['',[Validators.required]],
      plataforma:['',[Validators.required]],
      disponible:['',[Validators.required]],
      fechadeSalida:['',[Validators.required]], 
    });

  }

}
