import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserRoleServicesService } from '../services/userRoleServices.service';
import { ViewRecipeComponent } from 'src/app/shared/view-recipe/view-recipe.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  imagePath: string = 'https://upskilling-egypt.com:3006/';
  favData: any[] = [];
  loading: boolean = false;
  imgPath:string='https://upskilling-egypt.com:3006/';

  constructor(private _UserRoleServicesService: UserRoleServicesService,private _ToastrService: ToastrService, public dialog : MatDialog ) {}
  ngOnInit(): void {
    this.getFavRecipes();
  }
  getFavRecipes(): void {
    this._UserRoleServicesService.getAllfavRecipes().subscribe({
      next: (res) => {
        this.favData = res.data;
        console.log(this.favData.length)
      },
    });
  }
  removeFavorite(id: number): void {
    this._UserRoleServicesService.RemoveFav(id).subscribe({
      next: (res) => {
        console.log(res,"kkk");

      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
        this._ToastrService.success('Recipe removed from your favorites', 'Success');
        this._UserRoleServicesService.getAllfavRecipes().subscribe({
          next: (res) => {

            this.getFavRecipes();
            this.favData = res.data;
          },
        });
      },
    });
  }
  openViewDialog(item:any): void {
    const dialogRef = this.dialog.open(ViewRecipeComponent, {
      data: {name:item.name,img:this.imgPath+item.imagePath,price:item.price,description:item.description,caregory:item.category,tag:item.tag,creation:item.creationDate,modification:item.modificationDate},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

       


    });
  }
}
