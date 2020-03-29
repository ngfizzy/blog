import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { PoemDialogComponent } from '../../components/poem-dialog/poem-dialog.component';
import { Subscription } from 'rxjs';


import * as fromPoetry from '../../state/'
import * as poetryActions from '../../state/poetry.actions';

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
    private store: Store<fromPoetry.PoetryState>
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.store.dispatch(new poetryActions.GetPoem(+paramMap.get('id'))),
      this.dialogRef = this.dialogService.open(PoemDialogComponent, {
        maxWidth: '90vh',
        maxHeight: '90vh',
        data: this.store.pipe(select(fromPoetry.getPoem)),
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
