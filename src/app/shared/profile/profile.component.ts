import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService , private _ToastrService:ToastrService ,private _Router: Router){}
  isHide:boolean = true;
  isHideRePassword:boolean = true;
  imgSrc:any;
  isLoading:boolean = false
  registerForm:FormGroup = this._FormBuilder.group({
    userName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email]],
    country:['',Validators.required],
    phoneNumber:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    confirmPassword:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],

  },)


  ///ngx dropzone code
  files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
  this.imgSrc = this.files[0]
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
handleForm(Data:FormGroup){
  this.isLoading = true
  console.log(Data);
  let myData = new FormData();
  myData.append('userName',Data.value.userName);
  myData.append('email',Data.value.email);
  myData.append('country',Data.value.country);
  myData.append('phoneNumber',Data.value.phoneNumber);
  myData.append('confirmPassword',Data.value.confirmPassword);
  myData.append('profileImage',this.imgSrc);
    this._AuthService.updateProfile(myData).subscribe({
      next:(responce: any)=>{
        console.log(responce.message)
        this.isLoading = false
        this._Router.navigate(['/dashboard'])
        this._ToastrService.success(responce.message,'Successfully')
      },
      error:(err)=>{
        console.log(err.error.message);
        this._ToastrService.error(err.error.message,'Error!')
        this.isLoading = false
      }
    })
}
}
