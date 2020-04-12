import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromPoetry from '../../state';
import * as fromPoetryActions from '../../state/poetry.actions';
import { Poem } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { map, tap, first, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'poems-single-row-list.component.html',
  styleUrls: [ './poems-single-row-list.component.scss' ]
})
export class PoemsSingleRowListComponent implements OnInit {
  poems$: Observable<Poem[]>;
  selectedPoemId$: Observable<number>;

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
    this.preselectPoem();
  }

  getSelectedPoem(poemId: number) {
    this.router.navigate([ poemId ],  { relativeTo: this.route });
  }

  /**
   * Selects the first poem on the page if there i
   */
  private preselectPoem() {
    this.selectedPoemId$ = this.poems$.pipe(
      switchMap((poems) =>
        this.route.paramMap.pipe(
          map(params => +params.get('id')),
          map(poemId => poemId || poems[0].id),
        ),
      ),
      tap((poemId) => this.getSelectedPoem(poemId))
    );
  }
}
