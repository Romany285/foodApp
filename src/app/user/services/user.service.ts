import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private _HttpClient:HttpClient) { }
getAllRecipes():Observable<any>{
  return this._HttpClient.get(`userRecipe`)
}
// onAddFav(recipeId: number): Observable<any> {
//   return this._HttpClient.post('userRecipe', { recipeId });
// }
// getAllfavRecipes(): Observable<any> {
//   return this._HttpClient.get('userRecipe');
// }
// onRemoveFav(id: number): Observable<any> {
//   return this._HttpClient.delete(`userRecipe/${id}`);
// }
}
