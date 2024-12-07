import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService , private _ToastrService:ToastrService , private _Router:Router){}
  isHide:boolean = true;
  isLoading:boolean = false;
  loginForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
  })
  handleForm(){
    this.isLoading = true;
    const userData = this.loginForm.value
    if(this.loginForm.valid){
      this._AuthService.setLogin(userData).subscribe({
        next:(responce)=>{
          console.log(responce)
          this._ToastrService.success(responce.message,'Successfully')
          this.isLoading = false;
          localStorage.setItem('userToken',responce.token)
          this._AuthService.getProfile();
          console.log('ppppp')
        },
        error:(err)=>{
          console.log(err)
          this._ToastrService.error(err.error.message,'Error!')
          this.isLoading = false;
        },
        complete:()=>{
          if(this._AuthService.role == 'SuperAdmin'){
            this._Router.navigate(['/dashboard'])
          }
          else{
            this._Router.navigate(['/dashboard'])
          }
        }
      })
    }
  }
}
