import { CommentPayload } from './../shared/models/audience-activity-payloads.interface';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Article } from '../shared/models/article.interface';
import { getAllArticles, applaud, addComment } from '../mock-server';
import { ApplaudPayload } from '../shared/models';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  articles: Article[];

  constructor() {
    this.articles = getAllArticles();
  }

  getAll(): Observable<Article[]> {
    return of(
      this.articles.filter(
        found =>
          found.published === true &&
          !found.categories.find(category => category.name === 'poetry'),
      ),
    );
  }

  getOne(articleId: number): Observable<Article> {
    const article = this.articles.find(
      found => articleId === found.id && found.published === true,
    );

    return of(article);
  }

  applaud(applaudPayload: ApplaudPayload) {
    const audienceActivity = applaud(applaudPayload);

    return of(audienceActivity);
  }

  addComment(commentPayload: CommentPayload) {
    const audienceActivity = addComment(commentPayload);

    return of(audienceActivity);
  }
}
