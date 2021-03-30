import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Games } from 'src/app/shared/models/games.interface';

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
 
  constructor(private router: Router) { 
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

  onDelete(): void{
    alert('Eliminado')
  }
    
  onGoBackToList(): void{
    this.router.navigate(['Games']);
  }

}
