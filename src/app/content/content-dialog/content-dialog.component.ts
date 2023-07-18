import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import {  MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { content } from '../content.model';

@Component({
  selector: 'app-content-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2>{{ data.title }}</h2>
<mat-dialog-content class="mat-typography">
    <p>{{ data.description }}</p>

</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>Cancel</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Install</button>
</mat-dialog-actions>
  `,
  styles: [
  ]
})
export class ContentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: content) { }

}

