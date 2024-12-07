import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleServicesService {

constructor(private _HttpClient:HttpClient) { }
getAllRecipes(myParams:any):Observable<any>{
  return this._HttpClient.get(`Recipe` , {params : myParams})
}
getAllTags():Observable<any>{
  return this._HttpClient.get(`tag`)
}
AddFav(recipeId: number): Observable<any> {
  return this._HttpClient.post('userRecipe', { recipeId });
}
getAllfavRecipes(): Observable<any> {
  return this._HttpClient.get('userRecipe');
}
RemoveFav(id: number): Observable<any> {
  return this._HttpClient.delete(`userRecipe/${id}`);
}
}
