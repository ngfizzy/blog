import { Component, OnInit, Inject, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Poem } from 'src/app/shared/models';
import { PoemDialogComponent } from '../../components/poem-dialog/poem-dialog.component';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PoetryService } from '../../poetry.service';

@Component({
  templateUrl: './poem-dialog-view.component.html',
  styleUrls: [ './poem-dialog-view.component.scss' ]
})
export class PoemDialogViewComponent implements OnInit, OnDestroy {
  dialogRefSub: Subscription;
  dialogRef: MatDialogRef<PoemDialogComponent, any>;

  constructor(
    private dialogService: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private poetryService: PoetryService,
  ) { }

  ngOnInit() {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      this.route.paramMap.subscribe((paramMap) => {
        this.dialogRef = this.dialogService.open(PoemDialogComponent, {
          maxWidth: '90vh',
          maxHeight: '90vh',
          data: this.poetryService.getPoem(+paramMap.get('id')),
        });


      });

      this.dialogRefSub = this.dialogRef.afterClosed().subscribe(
        result => this.router.navigate(['..'], { relativeTo: this.route })
      );
  }

  ngOnDestroy(): void {
    this.dialogRefSub.unsubscribe();
  }
}
