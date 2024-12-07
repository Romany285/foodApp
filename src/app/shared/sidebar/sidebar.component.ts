import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/Services/auth.service';

interface Imenu{
  link:string;
  icon:string;
  text:string;
  isActive:boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _AuthService:AuthService){}
  isAdmin(){
    return this._AuthService.role === 'SuperAdmin' ? true : false
  }
  isUser(){
    return this._AuthService.role === 'SystemUser' ? true : false
  }
  menu:Imenu[]=[
    {link:'/dashboard/home',icon:'fa-home',text:'Home',isActive:this.isAdmin()||this.isUser()},
    {link:'/dashboard/admin/users',icon:'fa-user-group',text:'Users',isActive:this.isAdmin()},
    {link:'/dashboard/admin/recipes',icon:'fa-list',text:'Recipes',isActive:this.isAdmin()},
    {link:'/dashboard/admin/categories',icon:'fa-table-list',text:'Categoris',isActive:this.isAdmin()},
    {link:'/dashboard/user/user-recipes',icon:'fa-list',text:'Recipes',isActive:this.isUser()},
    {link:'/dashboard/user/fav',icon:'fa-heart',text:'favs',isActive:this.isUser()},
  ];
  logOut(){
    this._AuthService.signOut()
  }
}
