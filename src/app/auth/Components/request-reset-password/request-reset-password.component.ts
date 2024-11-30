import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.scss']
})
export class RequestResetPasswordComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService , private _Router:Router,private _ToastrService:ToastrService){}
  isLoading:boolean = false
  requestForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]]

  })
  handleForm(){
    this.isLoading = true
    const userData = this.requestForm.value
    if(this.requestForm.valid){
      this._AuthService.requestPassword(userData).subscribe({
        next:(responce)=>{
          console.log(responce)
          this._ToastrService.success(responce.message,'Successfully')
          this._Router.navigateByUrl('/auth/reset-password')
          localStorage.setItem('email',this.requestForm.value.email)
          this.isLoading = false
        },
        error:(err)=>{
          console.log(err)
          this._ToastrService.error(err.error.message,'Error!')
          this.isLoading = false
        },

      })
    }
  }
}
