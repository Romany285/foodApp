import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { ICategory } from './interfaces/Interface';
import { PageEvent ,MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { DeleteItemComponent } from 'src/app/shared/delete-item/delete-item.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private _CategoryService:CategoryService , public dialog : MatDialog,private _ToastrService:ToastrService){}
  listData:ICategory[] = [];
  tableRes:any;
  pageSize:number = 10;
  pageNumber:number = 1;
  searchVal:string = '';
  idEdit:number=0;
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    let tableParams = {
      pageSize : this.pageSize,
      pageNumber : this.pageNumber,
      name:this.searchVal
    }
    this._CategoryService.getAllCategories(tableParams).subscribe({
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
  addCategory(data:any){
    this._CategoryService.onAddCategory(data).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=> {
        this.getCategories()
      },
    })
  }
  //pageEvent: PageEvent;
  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
    //this.length = e.length;
    this.pageSize = e.pageSize ;
     this.pageNumber = e.pageIndex;
    this.getCategories()
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data:  {name:''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log(result);
        this.addCategory(result)
      }


    });
  }
  openDeleteDialog(item:any): void {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      data:  {text:'Category',id:item.id,name:item.name}
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
    this._CategoryService.deleteCategory(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success('Category is deleted')
      },
      error(err) {
        console.log(err);
      },
      complete:()=>{
        this.getCategories();
      }
    })
  }
  editCategory(id: number, categoryName: string): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: { name: categoryName , ReadOnly: false  },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._CategoryService.EditCategory(id, result).subscribe({
          next: (res) => {
            console.log(res);

          },
          error: () => {
            this._ToastrService.error('Failed to update category', 'Error');
          },
          complete: () => {
            this._ToastrService.success(`Category updated successfully!`,'Successfully');
            this.getCategories();
          },
        });
      }
    });
  }
  viewCategory(id:number ,name: string): void {
    this._CategoryService.getCategoryById(id).subscribe({
      next: (res) => {},
      error: () => {},
      complete: () => {
        this.dialog.open(AddEditCategoryComponent, {
          data: { name:name, ReadOnly: true },
        });
      },
    });
  }
}
