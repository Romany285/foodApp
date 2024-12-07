import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChangePassword, ILogin } from '../Interfaces/auth';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.getProfile();
    }

  }
  role:string | null = '' ;
  getProfile():void{
    if(localStorage.getItem('userToken') != null){
      let encodeToken:any = localStorage.getItem('userToken');
      let decodeToken:any = jwtDecode(encodeToken);
      localStorage.setItem('role',decodeToken.userGroup);
      localStorage.setItem('userName',decodeToken.userName);
      localStorage.setItem('email',decodeToken.userEmail);
      console.log(decodeToken)
      this.getRole();
    }
  }
  getRole(){
    if(localStorage.getItem('userToken') != null , localStorage.getItem('role') != null){
      this.role = localStorage.getItem('role');
    }
  }

  setLogin(userData:ILogin):Observable<any>{
    return this._HttpClient.post(`Users/Login`,userData)
  }
  setRegister(userData:FormData):Observable<any>{
    return this._HttpClient.post(`Users/Register`,userData)
  }
  requestPassword(userData:object):Observable<any>{
    return this._HttpClient.post(`Users/Reset/Request`,userData)
  }
  resetPassword(userData:object):Observable<any>{
    return this._HttpClient.post(`Users/Reset`,userData)
  }
  verifyCode(userData:object):Observable<any>{
    return this._HttpClient.put(`Users/verify`,userData)
  }
  signOut():void{
    localStorage.removeItem('userToken')
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
     this._Router.navigate(['/auth'])
   }
   ChangePassword(data: FormGroup): Observable<any> {
    return this._HttpClient.put('Users/ChangePassword', data);
  }
  updateProfile(profileForm: FormData): Observable<any> {
    return this._HttpClient.put('Users', profileForm);
  }
}
