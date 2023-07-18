import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { content } from '../content.model';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-content-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, TranslocoModule],
  template: `

<h2>  {{'title' | transloco }}</h2>
  <mat-dialog-content class="mat-typography">
        <p> {{'description' | transloco }} </p>
  </mat-dialog-content>

  <mat-dialog-actions align="end">
     <button  mat-raised-button color="primary" (click)="setLanguage('en')">English</button>
     <button  mat-raised-button color="primary" (click)="setLanguage('es')">Spanish</button>
  </mat-dialog-actions>
  `,
  styles: [
  ]
})
export class ContentDialogComponent {

  private translocoService = inject(TranslocoService);
  constructor(@Inject(MAT_DIALOG_DATA) public data: content) { }



  setLanguage(language: string) {
    this.translocoService.setActiveLang(language);
  }


}

