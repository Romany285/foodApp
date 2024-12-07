import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _HttpClient:HttpClient) { }
  getAllRecipes(myParams:any):Observable<any>{
    return this._HttpClient.get(`Recipe` , {params : myParams})
  }
  getAllTags():Observable<any>{
    return this._HttpClient.get(`tag`)
  }
  onAddRecipe(data:FormData):Observable<any>{
    return this._HttpClient.post(`Recipe` , data)
  }
  deleteRecipe(id:number):Observable<any>{
    return this._HttpClient.delete(`Recipe/${id}`)
  }
}
