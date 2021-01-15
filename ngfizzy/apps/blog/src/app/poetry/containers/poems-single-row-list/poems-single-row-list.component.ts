import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

import { Poem } from '../../../shared/models';
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
    this.themeImage$ = this.store.pipe(
      select(fromPoetry.selectPoemThemeImage),
    );

    const poemId$ = this.store.pipe(select(fromPoetry.selectPoemId));

    if (!this.route.firstChild) {
      this.selectedPoemId$ = combineLatest([
        this.preselectPoem(),
        poemId$
      ]).pipe(
        map(([ preselected, fromStore ]) => fromStore || preselected)
      );
    } else {
      this.selectedPoemId$ = poemId$;
    }
  }

  getSelectedPoem(poemId: number) {
    const route = [ '/poetry/poems/row'];

    if (poemId) {

      route.push(`${poemId}`);
    }

    this.router.navigate(route);
  }

  /**
   * Selects the first poem on the page if there i
   */
  private preselectPoem() {
    return this.poems$.pipe(
      map(poems => (poems || [])[0]?.id),
      tap((poemId) => this.getSelectedPoem(poemId))
    );
  }
}
