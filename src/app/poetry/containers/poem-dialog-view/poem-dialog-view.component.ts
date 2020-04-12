import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';


import * as fromPoetry from '../../state/';
import * as poetryActions from '../../state/poetry.actions';
import { tap } from 'rxjs/operators';


@Component({
  templateUrl: './poem-dialog-view.component.html',
  styleUrls: [
    './poem-dialog-view.component.scss'
  ],
})
export class PoemDialogViewComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromPoetry.PoetryState>  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      tap(paramMap => this.dispatchGetPoemAction(+paramMap.get('id'))),
    ).subscribe();
  }

  backdropClicked() {
    this.router.navigate(['/poetry/poems/grid']);
  }

  private dispatchGetPoemAction(poemId: number) {
    this.store.dispatch( new poetryActions.GetPoem(poemId));
  }
}
