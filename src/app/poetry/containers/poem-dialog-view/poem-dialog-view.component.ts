import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { PoemDialogComponent } from '../../components/poem-dialog/poem-dialog.component';
import { combineLatest, Observable, Subject } from 'rxjs';


import * as fromPoetry from '../../state/';
import * as poetryActions from '../../state/poetry.actions';
import { mergeMap, take, switchMap, last, tap, map, takeUntil, combineAll } from 'rxjs/operators';
import { Poem } from 'src/app/shared/models';
import { poemDialogDimensions, SlideShowActionsTypes } from 'src/app/core/constants';

@Component({
  templateUrl: './poem-dialog-view.component.html',
  styleUrls: [ './poem-dialog-view.component.scss' ]
})
export class PoemDialogViewComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  dialogRef: MatDialogRef<PoemDialogComponent, any>;
  poemId$: Observable<number>;
  poemIndex: number;

  constructor(
    private dialogService: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromPoetry.PoetryState>
  ) { }

  ngOnInit() {
    this.poemId$ = this.getPoemId();

    this.dispatchGetPoemAction();
    this.openDialog().subscribe(
      (actionAndPoems) => this.performActions(actionAndPoems),
    );
  }

  private openDialog() {
    return this.route.paramMap.pipe(
      map(
        () => this.dialogService.open(PoemDialogComponent, {
          ...poemDialogDimensions,
            data: this.store.pipe(select(fromPoetry.getPoem)),
        })
      ),
      switchMap((dialogRef) =>
        this.combineDialogAndPoemsSources(
          dialogRef.afterClosed()
        )
      ),
    );
  }

  private performActions([ action, poems ]) {
    if (!action) {
      return this.router.navigate(['/poetry/poems']);
    }

    if (!this.poemIndex) {
      this.poemIndex = poems.findIndex(poem => (poem.id === action.poemId)) || 0;
    }

    switch (action.action) {
      case SlideShowActionsTypes.Next: {
        const lstIndex = poems.length - 1;
        this.poemIndex++;
        const nextPoemIndex = this.poemIndex <= lstIndex ? this.poemIndex : 0;
        this.poemIndex = nextPoemIndex === 0 ? nextPoemIndex : this.poemIndex;
        const nextPoemId = poems[nextPoemIndex].id;

        return this.router.navigate(['/poetry/poems', nextPoemId]);
      }
      case SlideShowActionsTypes.Previous:
        const lastIndex = poems.length - 1;
        this.poemIndex--;
        const prevPoemIndex = this.poemIndex >= 0 ? this.poemIndex : lastIndex;
        this.poemIndex = prevPoemIndex >= lastIndex ? lastIndex : this.poemIndex;
        const prevPoemId = poems[prevPoemIndex].id;

        return this.router.navigate(['/poetry/poems', prevPoemId]);
    }

  }

  private combineDialogAndPoemsSources(dialogSource$: Observable<any>) {
    return combineLatest([
      dialogSource$,
      this.store.pipe(select(fromPoetry.getAllPoems)),
    ]);
  }

  private getPoemId(): Observable<number> {
    return this.route.paramMap.pipe(
      map((paramMap) => +paramMap.get('id')),
    );
  }

  private dispatchGetPoemAction() {
    return this.poemId$.pipe(takeUntil(this.destroy$)).subscribe(
      id => this.store.dispatch( new poetryActions.GetPoem(id) )
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
