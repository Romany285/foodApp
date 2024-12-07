import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }
  getAllCategories(data:any):Observable<any>{
    return this._HttpClient.get(`Category` , {params : data})
  }
  onAddCategory(data:any):Observable<any>{
    return this._HttpClient.post(`Category`,data)
  }
  deleteCategory(id:number):Observable<any>{
    return this._HttpClient.delete(`Category/${id}`)
  }
  EditCategory(id:number,updateCategory:string):Observable<any>{
    return this._HttpClient.put(`Category/${id}`,updateCategory)
  }
  getCategoryById(id: number): Observable<any> {
    return this._HttpClient.get(`Category/${id}`);
  }
}
