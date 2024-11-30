import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule
  ]
})
export class SharedModule { }
