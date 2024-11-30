import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService , private _ToastrService:ToastrService){}
  isHide:boolean = true;
  isHideRePassword:boolean = true;
  isLoading:boolean = false
  ngOnInit(): void {
    if(localStorage.getItem('email') != null){
      let email = localStorage.getItem('email')
      this.resetPasswordForm.value.email = email
    }
  }
  resetPasswordForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    seed:['',Validators.required],
    password:['',[Validators.required,Validators.pattern(/\w/)]],
    confirmPassword:['']
  },
  {validators:[this.confirmPassword] } as FormControlOptions)
  confirmPassword(group:FormGroup){
    const password = group.get('password');
    const rePassword = group.get('confirmPassword');
    if(rePassword?.value == ''){
      rePassword.setErrors({required:true})
    }
    else if(password?.value != rePassword?.value){
      rePassword?.setErrors({mismatch:true})
    }
  }
  handleForm(){
    this.isLoading = true
    const userData = this.resetPasswordForm.value
    if(this.resetPasswordForm.valid){
      this._AuthService.setLogin(userData).subscribe({
        next:(responce)=>{
          console.log(responce)
          this._ToastrService.success(responce.message,'Successfully')
          this.isLoading = false
        },
        error:(err)=>{
          console.log(err)
          this._ToastrService.error(err.error.message,'Error!')
          this.isLoading = false
        }
      })
    }
  }
}
