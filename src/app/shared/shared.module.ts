import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {  ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NotFoundComponent,
    HomeComponent,
    DeleteItemComponent,
    ViewRecipeComponent,
    ChangePasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxDropzoneModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    DeleteItemComponent
  ]
})
export class SharedModule { }
