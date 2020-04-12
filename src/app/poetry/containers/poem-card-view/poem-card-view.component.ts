import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as poetryState from '../../state';
import * as poetryActions from '../../state/poetry.actions';
import { Poem } from 'src/app/shared/models';

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
    this.route.paramMap.subscribe(
      paramMap => this.store.dispatch(
        new poetryActions.GetPoem(+paramMap.get('id'))
      ),
    );
  }
}
