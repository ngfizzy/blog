import { Component, OnInit, Inject, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Poem } from 'src/app/shared/models';
import { PoemDialogComponent } from '../../components/poem-dialog/poem-dialog.component';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './poem-dialog-view.component.html',
  styleUrls: [ './poem-dialog-view.component.scss' ]
})
export class PoemDialogViewComponent implements OnInit, OnDestroy {
  poem: Poem = {
    id: 5,
    title: 'This is a poem',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec mattis lorem. Cras metus lectus, vehicula eu nisl at, pulvinar ultricies nisl. Morbi hendrerit gravida nisl at dictum. Donec sit amet dui blandit, faucibus justo sed, consequat arcu. Nullam est neque, feugiat vitae mi ac, facilisis interdum leo. Phasellus hendrerit magna sit amet lobortis suscipit. Curabitur quis fringilla orci, fringilla blandit ante. Pellentesque eu orci eget justo sollicitudin consequat non cursus nunc. Phasellus ac maximus neque, sed maximus est.',
    authorId:  1,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    tags: [],
    categories: [],
    published: true,
  };
  dialogRefSub: Subscription;

  constructor(
    private dialogService: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    const dialogRef = this.dialogService.open(PoemDialogComponent, {
      maxWidth: '90vh',
      maxHeight: '90vh',
      data: { title: this.poem.title, body: this.poem.body }
    });

    this.dialogRefSub = dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

  ngOnDestroy(): void {
    this.dialogRefSub.unsubscribe();
  }
}
