import { Injectable } from '@angular/core';
import { ArticlesService } from '../core/articles.service';
import { map, tap } from 'rxjs/operators';
import { Poem } from '../shared/models';
import { Observable } from 'rxjs';

@Injectable()
export class PoetryService {
  constructor(private articlesService: ArticlesService) { }

  getAllPoems() {
   return this.articlesService.getAll().pipe(
      map(articles => {
        return articles
          .filter(article =>
            article.categories
              .find(category => category.name === 'poetry'),
          );
      }),
    );
  }

  getPoem(poemId: number) {
    return this.articlesService.getOne(poemId)  as Observable<Poem>;
  }
}
