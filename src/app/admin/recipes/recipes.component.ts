import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { RecipesService } from './services/recipes.service';
import { CategoryService } from '../categories/services/category.service';

import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';
import { IRecipes } from './interfaces/recipes';
import { ViewRecipeComponent } from 'src/app/shared/view-recipe/view-recipe.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  constructor(private _RecipesService:RecipesService ,private _ToastrService:ToastrService,private _CategoryService:CategoryService, public dialog : MatDialog){}
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
    this.getTags();
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
    this._RecipesService.getAllRecipes(tableParams).subscribe({
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
  getTags(){
    this._RecipesService.getAllTags().subscribe({
      next:(res)=>{
        console.log(res);
        this.listTags = res
      },
      error(err) {
        console.log(err);
      },
    })
  }

  handlePageEvent(e: PageEvent) {

    this.pageSize = e.pageSize ;
     this.pageNumber = e.pageIndex;
    this.getRecipes()
  }
  
  openDeleteDialog(item:any): void {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data:  {text:'Recipe',id:item.id,name:item.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.onDeleteUser(result)
      }


    });
  }
  onDeleteUser(id:number){
    this._RecipesService.deleteRecipe(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success('Recipe is deleted')
      },
      error(err) {
        console.log(err);
      },
      complete:()=>{
        this.getRecipes();
      }
    })
  }
  openViewDialog(item:IRecipes): void {
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
}
