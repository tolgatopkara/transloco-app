import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ContentService } from '../content/content.service';
import { content } from '../content/content.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContentDialogComponent } from '../content/content-dialog/content-dialog.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,CommonModule,MatDialogModule],
  template: `
        <button
          (click)="openContentModal(item)"
          *ngFor="let item of contentList"
          mat-raised-button color="primary">{{item.title}}
        </button>

  `,
  styles: [ `.mat-mdc-button-base {
  margin: 8px;
}`
  ]
})
export class HomeComponent implements OnInit {

  contentService = inject(ContentService);
  public dialog = inject(MatDialog);
  contentList: content[] = [];

  ngOnInit(): void {
    this.contentList = this.contentService.getContentList();
    // console.log(this.contentList);
  }
  openContentModal(item : content) {
    const dialogRef = this.dialog.open(ContentDialogComponent, {
      width: '450px',
      data:  item
    });
    // console.log(item);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  }


