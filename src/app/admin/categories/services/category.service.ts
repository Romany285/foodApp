import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }
  getAllCategories():Observable<any>{
    let myParams = { pageSize : 10 , pageNumber : 1};
    return this._HttpClient.get(`Category` , {params : myParams})
  }
}
