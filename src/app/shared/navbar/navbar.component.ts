import { Component } from '@angular/core';
import { ChangePasswordComponent } from '../changePassword/changePassword.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public dialog : MatDialog){}
  userName = localStorage.getItem('userName')
  imgSrc:string = "../../../assets/image/Ellipse 234.svg";
  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data:  {name:''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log(result);

      }


    });
  }
  
}
