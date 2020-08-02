import { Injectable } from '@angular/core';
import { ArticlesService } from '../../core/services/articles/articles.service';
import { map, tap } from 'rxjs/operators';
import { Poem, Poems, CommentPayload, ApplaudPayload } from '../../shared/models';
import { Observable, of } from 'rxjs';
import { poemThemeImagePlaceholders } from '../../core/constants';
import { getAllPublishedPoems } from '../../mock-server';
import { PoetryGqlService } from './poetry-gql.service';

@Injectable()
export class PoetryService {
  private poems$: Observable<Poem[]>;
  constructor(
    private articlesService: ArticlesService,
    private poetryGqlService: PoetryGqlService
  ) {
    this.poems$ = of(getAllPublishedPoems()).pipe(
      map(poems => this.assignRandomThemeImagesToPoems(poems)),
    );
  }

  getAllPoems() {
    return this.poetryGqlService.getAllPoems()
      .pipe(map(response => {
        const poems = this.assignRandomThemeImagesToPoems(response.poems);
        response.poems = poems;

        return response;
      }));
  }

  getPoem(poemId: number) {
    return this.poems$.pipe(
      map(poems =>
        poems.find(found => poemId === found.id && found.published === true),
      ),
    );
  }

  applaud(applaudPayload: ApplaudPayload) {
    return this.articlesService.applaud(applaudPayload);
  }

  addComment(commentPayload: CommentPayload): Observable<any> {
    return this.articlesService.addComment(commentPayload);
  }

  private assignRandomThemeImagesToPoems(poems: Poems) {
    return poems.map(poem => this.assignRandomThemeImageToPoem(poem));
  }

  private assignRandomThemeImageToPoem(poem: Poem): Poem {
    if (poem) {
      poem.themeImage = poem.themeImage || this.generateRandomThemeImage();
    }

    return poem;
  }

  private generateRandomThemeImage(): string {
    const placeHolderIndex = Math.floor(
      Math.random() * poemThemeImagePlaceholders.length,
    );

    return poemThemeImagePlaceholders[placeHolderIndex];
  }
}
