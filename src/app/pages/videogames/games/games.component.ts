import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { VideogamesService } from '../videogames.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games$ = this.gamesSvc.games;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
    
  };


  constructor(private router: Router, private gamesSvc: VideogamesService) { }

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

  async onGoToDelete(gameId: string): Promise<void> {
    try{
      await this.gamesSvc.onDeleteGames(gameId);
      alert('Eliminado');
    }catch(err){
      reject(err.message);
    }
  }

}
function reject(message: any) {
  throw new Error('Function not implemented.');
}

