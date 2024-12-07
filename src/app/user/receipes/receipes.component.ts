import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { IRecipes } from 'src/app/admin/recipes/interfaces/recipes';
import { UserRoleServicesService } from '../services/userRoleServices.service';
import { ViewRecipeComponent } from 'src/app/shared/view-recipe/view-recipe.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {

  constructor(private _UserRoleServicesService:UserRoleServicesService ,private _ToastrService:ToastrService,private _CategoryService:CategoryService, public dialog : MatDialog){}
  listData:any ;
  listCategory:IRecipes[]=[];
  tableRes:any;
  pageSize:number = 10;
  pageNumber:number = 1;
  searchVal:string = '';
  tagId:number=0;
  categoryId:number=0;
  imgPath:string='https://upskilling-egypt.com:3006/';
  listTags:any;

  ngOnInit(): void {
    this.getRecipes();
    this.getTags()
    this.getAllCategory();
  }
  getRecipes(){
    let tableParams = {
      pageSize : this.pageSize,
      pageNumber : this.pageNumber,
      name:this.searchVal,
      tagId : this.tagId,
      categoryId:this.categoryId
    }
    this._UserRoleServicesService.getAllRecipes(tableParams ).subscribe({
      next:(res)=>{
        console.log(res);
        this.listData = res.data
        this.tableRes = res
      },
      error(err) {
        console.log(err);
      },
    })
  }
  getTags(){
    this._UserRoleServicesService.getAllTags().subscribe({
      next:(res)=>{
        console.log(res);
        this.listTags = res
      },
      error(err) {
        console.log(err);
      },
    })
  }
  getAllCategory(){
    let tableParams = {
      pageSize : 2000,
      pageNumber : this.pageNumber,
      name:this.searchVal
    }
    this._CategoryService.getAllCategories(tableParams).subscribe({
      next:(res)=>{
         console.log(res);
        this.listCategory = res.data
      },
      error(err) {
        console.log(err);
      },
    })
  }
  openViewDialog(item:any): void {
    const dialogRef = this.dialog.open(ViewRecipeComponent, {
      data: {name:item.name,img:this.imgPath+item.imagePath,price:item.price,description:item.description,caregory:item.category,tag:item.tag,creation:item.creationDate,modification:item.modificationDate},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      // if(result){
      //   this.onDeleteUser(result)
      // }


    });
  }
  addToFavorites(item:number){
    this._UserRoleServicesService.AddFav(item).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success('Recipe added to your favorites', 'Success');
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
  handlePageEvent(e: PageEvent) {

    this.pageSize = e.pageSize ;
     this.pageNumber = e.pageIndex;
    this.getRecipes()
  }
}
