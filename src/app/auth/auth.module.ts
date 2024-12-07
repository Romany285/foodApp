import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component'

import { NgxDropzoneModule } from 'ngx-dropzone';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RequestResetPasswordComponent } from './Components/request-reset-password/request-reset-password.component';
import { VerifyComponent } from './Components/verify/verify.component';
 

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    ResetPasswordComponent,
    RequestResetPasswordComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule

  ]

})
export class AuthModule { }
