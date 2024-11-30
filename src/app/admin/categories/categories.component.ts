import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { ICategory } from './interfaces/Interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private _CategoryService:CategoryService){}
  listData:ICategory[] = [];
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this._CategoryService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res);
        this.listData = res.data
      },
      error(err) {
        console.log(err);
      },
    })
  }
}
