import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService , private _ToastrService:ToastrService,private _Router:Router){}
  isLoading:boolean = false;
  loginForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    code:['']
  })
  handleForm(){
    this.isLoading = true;
    const userData = this.loginForm.value
    if(this.loginForm.valid){
      this._AuthService.verifyCode(userData).subscribe({
        next:(responce)=>{
          console.log(responce)
          this._ToastrService.success(responce.message,'Successfully')
          this.isLoading = false;
          this._Router.navigate(['/auth/login'])
        },
        error:(err)=>{
          console.log(err)
          this._ToastrService.error(err.error.message,'Error!')
          this.isLoading = false;
        }
      })
    }
  }
}
