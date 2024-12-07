import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }
  getAllUsers(tableParams:any):Observable<any>{
    return this._HttpClient.get(`Users`,{params:tableParams})
  }
  deleteUser(id:number):Observable<any>{
    return this._HttpClient.delete(`Users/${id}`)
  }
}
