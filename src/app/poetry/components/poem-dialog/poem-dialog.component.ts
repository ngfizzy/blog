import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Poem } from 'src/app/shared/models';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './poem-dialog.component.html',
  styleUrls: [ './poem-dialog.component.scss' ]
})
export class PoemDialogComponent implements OnInit {
  currentLocation = window.location.href;

  constructor(
    public dialogRef: MatDialogRef<PoemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public poem$: Observable<Poem>,
    private toastr: ToastrService,
  ) {}

  ngOnInit() { }

  linkCopied() {
    this.toastr.info('Sharable Link Copied');
  }
}
