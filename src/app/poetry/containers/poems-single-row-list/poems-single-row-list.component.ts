import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromPoetry from '../../state';
import * as fromPoetryActions from '../../state/poetry.actions';
import { Poem } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { map, tap, first } from 'rxjs/operators';

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
    private store: Store<fromPoetry.PoetryState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromPoetryActions.GetAllPoems());
    this.poems$ = this.store.pipe(select(fromPoetry.getAllPoems));
    this.preselectPoem();
  }

  getSelectedPoem(poemId: number) {
      // to be implemented
  }

  private preselectPoem() {
    this.selectedPoemId$ = this.poems$.pipe(
      map((poems) => {
        if (poems.length) {
          return  poems[0].id;
        }
      })
    );
  }
}
