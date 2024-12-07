import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
