import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Games } from 'src/app/shared/models/games.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VideogamesService {
  games: Observable<Games[]>;

  private gamesCollection: AngularFirestoreCollection<Games>;


  constructor(private readonly afs: AngularFirestore) {
    this.gamesCollection = afs.collection<Games>('Games');
    this.getGames();
   }
 

   onDeleteGames(gameId: string): Promise<void>{
      return new Promise (async (resolve, rejects) => {
        try{
          const result = await this.gamesCollection.doc(gameId).delete();
          resolve(result);
        }catch(err){
          rejects(err.message);
        }
      })
   }

   onSaveGames(game: Games,gameId: string): Promise<void>{
     return new Promise ( async (resolve,rejects) => {
        try{
            const id = gameId || this.afs.createId();
            const data = {id, ...game};
            const result = await this.gamesCollection.doc(id).set(data)
            resolve(result);
            alert('Actualizado');
        }catch(err){
          rejects(err.message);
        }
     })
   }

   private getGames(): void{
     this.games = this.gamesCollection.snapshotChanges().pipe
     (map(Actions => Actions.map(a => a.payload.doc.data() as Games)))
   }



}
