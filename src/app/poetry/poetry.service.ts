import { Injectable } from '@angular/core';
import { ArticlesService } from '../core/articles.service';
import { map, tap } from 'rxjs/operators';
import { Poem, Poems } from '../shared/models';
import { Observable } from 'rxjs';
import { poemThemeImagePlaceholders } from '../core/constants';

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
      map(poems => this.assignRandomThemeImagesToPoems(poems))
    );
  }

  getPoem(poemId: number) {
    return this.articlesService.getOne(poemId).pipe(
      map(poem => this.assignRandomThemeImageToPoem(poem))
    );
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
        Math.random() * poemThemeImagePlaceholders.length
    );

    return poemThemeImagePlaceholders[placeHolderIndex];
  }
}
