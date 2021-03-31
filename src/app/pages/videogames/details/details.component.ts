import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Games } from 'src/app/shared/models/games.interface';
import { VideogamesService } from '../videogames.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

 
  Games: Games = null;

    navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
    
  };
 
  constructor(private router: Router, private gamesSvc: VideogamesService) { 
    const navigation = this.router.getCurrentNavigation();
    this.Games = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if(typeof this.Games == "undefined"){
      this.router.navigate(['Games'])
    }
  }

  onGoToEdit():void {
    this.navigationExtras.state.value = this.Games;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try{
      await this.gamesSvc.onDeleteGames(this.Games?.id);
      alert('Eliminado');
      this.onGoBackToList();
    }catch(err){
      reject(err.message);
    }
  }
    
  onGoBackToList(): void{
    this.router.navigate(['Games']);
  }

}
function reject(message: any) {
  throw new Error('Function not implemented.');
}

