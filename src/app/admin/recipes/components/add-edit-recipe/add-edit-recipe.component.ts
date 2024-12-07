import { Component } from '@angular/core';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { RecipesService } from '../../services/recipes.service';
import { ICategory } from 'src/app/admin/categories/interfaces/Interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss']
})
export class AddEditRecipeComponent {
  constructor(private _CategoryService:CategoryService,private _ToastrService:ToastrService,private _RecipesService:RecipesService,private _Router:Router){}
  listTags:any;
  listCategory:ICategory[]=[];
  tagId:number=0;
  categoryId:number=0;
  recipeForm = new FormGroup({
    name :new FormControl(null),
    description  :new FormControl(null),
    price  :new FormControl(null),
    tagId  :new FormControl(null),
    categoriesIds :new FormControl(null),
  })
  ngOnInit(): void {
    this.getTags();
    this.getAllCategory();
  }
  getAllCategory(){
    let tableParams = {
      pageSize : 2000,
      // pageNumber : this.pageNumber,
      // name:this.searchVal
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
  sendData(data:FormGroup){
    let myData = new FormData();
    myData.append('name',data.value.name);
    myData.append('description',data.value.description);
    myData.append('price',data.value.price);
    myData.append('tagId',data.value.tagId);
    myData.append('categoriesIds',data.value.categoriesIds);
    this._RecipesService.onAddRecipe(myData).subscribe({
      next:(res)=> {
        console.log(res);
        this._ToastrService.success(res.message,'Successfully')
      },
      error:(err) => {
        console.log(err);

      },
      complete:()=>{
        this._Router.navigate(['/dashboard/admin/recipes'])
      }
    })
  }
}
