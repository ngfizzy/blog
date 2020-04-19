import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Poem } from 'src/app/shared/models';
import * as fromPoetry from '../../state';
import * as fromPoetryActions from '../../state/poetry.actions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'poems-single-row-list.component.html',
  styleUrls: [ './poems-single-row-list.component.scss' ]
})
export class PoemsSingleRowListComponent implements OnInit {
  poems$: Observable<Poem[]>;
  selectedPoemId$: Observable<number>;
  themeImage$: Observable<string>;

  groupSize = 6;
  currentGroup = 0;

  constructor(
    private store: Store<fromPoetry.PoetryState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromPoetryActions.GetAllPoems());
    this.poems$ = this.store.pipe(select(fromPoetry.getAllPoems));
    this.themeImage$ = this.store.pipe(select(fromPoetry.selectPoemThemeImage));

    if (!this.route.firstChild) {
      this.preselectPoem();
    }
  }

  getSelectedPoem(poemId: number) {
    this.router.navigate([ poemId ],  { relativeTo: this.route });
  }

  /**
   * Selects the first poem on the page if there i
   */
  private preselectPoem() {
    this.selectedPoemId$ = this.poems$.pipe(
      map(poems => poems[0].id),
      tap((poemId) => this.getSelectedPoem(poemId))
    );
  }
}
