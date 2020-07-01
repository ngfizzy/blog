import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Article } from 'src/app/shared/models';
import { articlesQuery } from './queries';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GQLError } from '../../../shared/models/';


type ArticlesResponse = { articles: Article[]} & GQLError;

@Injectable()
export class AuthorsArticlesGQLService {

  constructor(private apollo: Apollo) {}

  getAllArticles(): Observable<ArticlesResponse> {
    return this.apollo.watchQuery<ArticlesResponse>({
      query: articlesQuery,
    }).valueChanges.pipe(map(response => response.data));
  }
}
