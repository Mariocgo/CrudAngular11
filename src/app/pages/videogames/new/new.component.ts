import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  template: `<app-games-form></app-games-form>`,
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
