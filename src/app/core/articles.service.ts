import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Article } from '../shared/models/article.interface';
import { generateArticles,  getAllArticles } from '../mock-server';

@Injectable({providedIn: 'root'})
export class ArticlesService {
  articles: Article[];

  constructor() {
    this.articles = getAllArticles();
    if (!this.articles.length) {
      this.articles = generateArticles(50);
    }
  }

  getAll(): Observable<Article[]> {
    return of(this.articles.filter(found => found.published === true));
  }

  getOne(articleId: number): Observable<Article> {
    const article = this.articles.find((found) =>
      articleId === found.id &&
      found.published === true
    );

    return of(article);
  }
}
