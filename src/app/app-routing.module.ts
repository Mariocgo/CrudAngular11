import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'Games', loadChildren: () => import('./pages/videogames/games/games.module').then(m => m.GamesModule) }, { path: 'new', loadChildren: () => import('./pages/videogames/new/new.module').then(m => m.NewModule) }, { path: 'details', loadChildren: () => import('./pages/videogames/details/details.module').then(m => m.DetailsModule) }, { path: 'edit', loadChildren: () => import('./pages/videogames/edit/edit.module').then(m => m.EditModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
