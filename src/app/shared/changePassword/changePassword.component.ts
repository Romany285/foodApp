import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/Services/auth.service';

@Component({
  selector: 'app-changePassword',
  templateUrl: './changePassword.component.html',
  styleUrls: ['./changePassword.component.css']
})
export class ChangePasswordComponent   {
  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private _FormBuilder:FormBuilder,private _AuthService:AuthService , private _ToastrService:ToastrService) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  isHide:boolean = true;
  isHideRePassword:boolean = true;
  isLoading:boolean = false;
  resetPasswordForm:FormGroup = this._FormBuilder.group({
    oldPassword:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
    newPassword:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
    confirmNewPassword:['']
  },
  {validators:[this.confirmPassword] } as FormControlOptions)
  confirmPassword(group:FormGroup){
    const password = group.get('newPassword');
    const rePassword = group.get('confirmNewPassword');
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
      this._AuthService.ChangePassword(userData).subscribe({
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
