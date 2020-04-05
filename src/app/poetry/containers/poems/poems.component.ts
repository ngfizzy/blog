import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Poem } from 'src/app/shared/models';
import * as fromPoetry from '../../state';
import * as poetryActions from '../../state/poetry.actions';
import { trigger, transition, group, style, animate, query } from '@angular/animations';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: [ './poems.component.scss' ],
  animations: [
    trigger('routeSlide', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.4s ease-in-out', style({ transform: 'translateX(0%)'}))
          ], { optional: true}),
          query(':leave', [
            style({ transform: 'translateX(0%)'}),
            animate('0.4s ease-in-out', style({ transform: 'translateX(-100%'}))
          ], { optional: true }),
        ]),
      ]),
    ]),
  ],
})
export class PoemsComponent implements OnInit {
  poems$: Observable<Poem[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromPoetry.PoetryState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new poetryActions.GetAllPoems());
    this.poems$ = this.store.pipe(select(fromPoetry.getAllPoems));
  }

  getState(outletRef: RouterOutlet) {
    if ( outletRef && outletRef.isActivated &&  outletRef.activatedRoute) {
      return {
        value: outletRef.activatedRoute.snapshot.params.index
      };
    }
  }

  showPoemDialog(poemId: number) {
    this.router.navigate(['./', poemId ], { relativeTo: this.route });
  }
}
