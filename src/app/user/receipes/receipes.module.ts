import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceipesComponent } from './receipes.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRecipesPipe } from 'src/app/admin/Pipe/searchRecipes.pipe';
const routes : Routes = [
  {path:'',component:ReceipesComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SearchRecipesPipe
  ],
  declarations: [ReceipesComponent ]
})
export class ReceipesModule { }
