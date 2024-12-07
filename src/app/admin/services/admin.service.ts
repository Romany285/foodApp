import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(private _HttpClient:HttpClient) { }
changePassword(userData:object):Observable<any>{
  return this._HttpClient.post(`Users/Reset`,userData)
}
}
