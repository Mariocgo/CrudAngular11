import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
    
  };

  fakeData = [
    {
      nombre:'Mario',
      desarrolladora: 'nintendo',
      plataforma: 'Nintendo S',
      fechadeSalida: '05/05/2020',
      disponible:true
    },
    {
      nombre:'Doom',
      desarrolladora: 'bethesta',
      plataforma: 'Nintendo S,xbox one, ps4',
      fechadeSalida: '05/05/2020',
      disponible:false
    },
    {
      nombre:'ffvii remake',
      desarrolladora: 'square enix',
      plataforma: 'ps4',
      fechadeSalida: '05/05/2020',
      disponible:false
    },
    {
      nombre:'animal crossing',
      desarrolladora: 'nintendo',
      plataforma: 'Nintendo S',
      fechadeSalida: '05/05/2020',
      disponible: true
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any):void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGoToSee(item: any):void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  onGoToDelete(item: any):void {
    alert('Eliminado');
  }

}
