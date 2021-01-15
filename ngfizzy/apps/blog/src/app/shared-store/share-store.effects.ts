import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ArticlesService } from '../core/services/articles/articles.service';
import { NextActionService } from '../core/services/next-action.service';

import * as sharedStoreActions from './shared-store.actions';


@Injectable()
export class SharedStoreEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private nextActionsService: NextActionService,
  ) {}

  getFeaturedArticles$ = createEffect(
    () => this.actions$.pipe(
      ofType(sharedStoreActions.getFeaturedArticles),
      switchMap(() => this.articlesService
        .getFeaturedArticles().pipe(
          map(res => this.nextActionsService.emitNextActions(
            res,
            sharedStoreActions.getFeaturedArticlesSuccess,
            sharedStoreActions.getFeaturedArticlesError
          ))
        ),
      ),
    )
  );
}
