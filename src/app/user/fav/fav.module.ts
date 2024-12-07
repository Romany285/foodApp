import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavComponent } from './fav.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
const routes : Routes = [
  {path:'',component:FavComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [FavComponent]
})
export class FavModule { }
