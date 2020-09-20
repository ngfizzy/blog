import { Injectable } from '@angular/core';
import { ArticlesService } from '../../core/services/articles/articles.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { Poem, Poems, CommentPayload, ApplaudPayload } from '../../shared/models';
import { Observable, of } from 'rxjs';
import { poemThemeImagePlaceholders } from '../../core/constants';
import { getAllPublishedPoems } from '../../mock-server';
import { PoetryGqlService } from './poetry-gql.service';
import { PoemsResponse, PoemResponse } from '../poetry-shared/models/graphql-responses/responses';
import { Store, select } from '@ngrx/store';
import { getAllPoems } from '../state/poetry.state';
import { ArticlesGqlService } from 'src/app/core/services/articles/articles-gql.service';
import { AudienceActivitiesResponse } from 'src/app/shared/models/graphql-responses/responses';

@Injectable()
export class PoetryService {
  private poems$: Observable<Poem[]>;
  constructor(
    private articlesService: ArticlesService,
    private articleGQlService: ArticlesGqlService,
    private poetryGqlService: PoetryGqlService,
    private store: Store
  ) {
    this.poems$ = of(getAllPublishedPoems()).pipe(
      map(poems => this.assignRandomThemeImagesToPoems(poems)),
    );
  }

  getAllPoems(): Observable<PoemsResponse> {
    return this.poetryGqlService.getAllPoems()
      .pipe(map(response => {
        const poems = this.assignRandomThemeImagesToPoems(response.poems);

        return { ...response, poems};
      }));
  }

  getPoem(poemId: number): Observable<PoemResponse> {
    return this.store.pipe(select(getAllPoems))
      .pipe(
        map(poems => poems.find(p => p.id === poemId)),
      switchMap(poem => {
        if (poem) {
          return of({ poem });
        }

        this.articleGQlService.getOneArticle(poemId);
      })
    );
  }

  applaud(applaudPayload: ApplaudPayload): Observable<AudienceActivitiesResponse> {
    return this.articlesService.applaud(applaudPayload);
  }

  addComment(commentPayload: CommentPayload): Observable<AudienceActivitiesResponse> {
    return this.articlesService.addComment(commentPayload);
  }

  private assignRandomThemeImagesToPoems(poems: Poems) {
    return poems.map(poem => this.assignRandomThemeImageToPoem(poem));
  }

  private assignRandomThemeImageToPoem(poem: Poem): Poem {
    if (poem) {
      return {
        ...poem,
        themeImage: poem.themeImage || this.generateRandomThemeImage()
      };
    }

    return { ...poem };
  }

  private generateRandomThemeImage(): string {
    const placeHolderIndex = Math.floor(
      Math.random() * poemThemeImagePlaceholders.length,
    );

    return poemThemeImagePlaceholders[placeHolderIndex];
  }
}
