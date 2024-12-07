import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICategory } from '../categories/interfaces/Interface';
import { CategoryService } from '../categories/services/category.service';
import { RecipesService } from '../recipes/services/recipes.service';
import { UsersService } from './services/users.service';
import { AddEditCategoryComponent } from '../categories/components/add-edit-category/add-edit-category.component';
import { PageEvent } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private _ToastrService:ToastrService,private _CategoryService:CategoryService, public dialog : MatDialog ,private _UsersService:UsersService){}
  listData:any ;
  listCategory:ICategory[]=[];
  tableRes:any;
  pageSize:number = 10;
  pageNumber:number = 1;
  searchVal:string = '';
  tagId:number=0;
  categoryId:number=0;
  imgPath:string='https://upskilling-egypt.com:3006/';
  listTags:any;
  roleId:number[]=[1,2];
  searchByInput:string = 'name';
  ngOnInit(): void {

    this.getAllUsers();
  }

  getAllUsers(){
    let tableParams = {
      pageSize : this.pageSize,
      pageNumber : this.pageNumber,
      groups:this.roleId,
      userName:this.searchVal
    }
    this._UsersService.getAllUsers(tableParams).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.tableRes = res
        this.listData = res.data

      },
      error(err) {
        console.log(err);
      },
    })
  }
  handlePageEvent(e: PageEvent) {

    this.pageSize = e.pageSize ;
     this.pageNumber = e.pageIndex;
    this.getAllUsers()
  }
  openDeleteDialog(item:any): void {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data:  {text:'Users',id:item.id,userName:item.userName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.onDeleteUser(result)
      }


    });
  }
  openViewDialog(item:IUser): void {
    const dialogRef = this.dialog.open(ViewUserComponent, {
      data: {item,url:this.imgPath},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // if(result){
      //   this.onDeleteUser(result)
      // }


    });
  }
  onDeleteUser(id:number){
    this._UsersService.deleteUser(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success('User is deleted')
      },
      error(err) {
        console.log(err);

      },
      complete:()=>{
        this.getAllUsers()

      }
    })
  }

}
