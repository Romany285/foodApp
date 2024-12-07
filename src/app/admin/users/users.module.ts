import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { SearchUsersPipe } from '../Pipe/searchUsers.pipe';
const routes : Routes = [
  {path:'',component:UsersComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SearchUsersPipe
  ],
  declarations: [UsersComponent, ViewUserComponent]
})
export class UsersModule { }
