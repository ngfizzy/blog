import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as poetryState from '../../state';
import * as poetryActions from '../../state/poetry.actions';
import { Poem } from '../../../shared/models';
import { switchMap, map } from 'rxjs/operators';

@Component({
  templateUrl: 'poem-card-view.component.html',
  styleUrls: [ './poem-card-view.component.scss' ],
})
export class PoemCardViewComponent implements OnInit {
  poem$: Observable<Poem>;

  constructor(
    private store: Store<poetryState.PoetryState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(routePMap => this.store
          .pipe(
            select(poetryState.getAllPoems),
            map(
              poems => ({poems, poemId: +routePMap.get('id')})
            ),
          ),
      )
    ).subscribe(result => {
      if (result?.poems?.length) {
        this.store.dispatch( new poetryActions.GetPoem(result.poemId));

      }
    });
  }
}
