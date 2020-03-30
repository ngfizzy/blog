import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Poem } from 'src/app/shared/models';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SlideShowActionsTypes } from 'src/app/core/constants';

@Component({
  templateUrl: './poem-dialog.component.html',
  styleUrls: [ './poem-dialog.component.scss' ]
})
export class PoemDialogComponent {
  currentLocation = window.location.href;
  data: { action?: SlideShowActionsTypes, poemId: number };
  constructor(
    public dialogRef: MatDialogRef<PoemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public poem$: Observable<Poem>,
    private toastr: ToastrService,
  ) {}


  linkCopied() {
    this.toastr.info('Sharable Link Copied');
  }

  goToPrevious(poemId: number) {
    this.dialogRef.close({
      poemId,
      action: SlideShowActionsTypes.Previous
    });
  }

  goToNext(poemId: number) {
    this.dialogRef.close({
      poemId,
      action: SlideShowActionsTypes.Next,
    });
  }

  startSlideShow(poemId: number) {
    this.dialogRef.close({
      poemId,
      action: SlideShowActionsTypes.Play,
    });
  }

  pauseSlideShow(poemId: number) {
    this.dialogRef.close({
      poemId,
      action: SlideShowActionsTypes.Pause
    });
  }
}
