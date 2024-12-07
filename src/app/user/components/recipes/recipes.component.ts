import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { IRecipes } from 'src/app/admin/recipes/interfaces/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  standalone:true
})
export class RecipesComponent implements OnInit {

  constructor(private _UserService:UserService ,private _ToastrService:ToastrService,private _CategoryService:CategoryService, public dialog : MatDialog){}
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
    this._UserService.getAllRecipes().subscribe({
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




}
