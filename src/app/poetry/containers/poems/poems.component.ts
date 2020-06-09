import { getPageTitle } from './../../../core/state/index';
import { SetPageTitle } from './../../../core/state/core.actions';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Poem } from 'src/app/shared/models';
import * as fromPoetry from '../../state';
import * as poetryActions from '../../state/poetry.actions';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss'],
})
export class PoemsComponent implements OnInit {
  poems$: Observable<Poem[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromPoetry.PoetryState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(new poetryActions.GetAllPoems());
    this.poems$ = this.store.pipe(select(fromPoetry.getAllPoems));
  }

  showPoemDialog(poemId: number) {
    this.router.navigate(['./', poemId], { relativeTo: this.route });
  }
}
