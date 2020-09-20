import {Apollo} from 'apollo-angular';
import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs/operators';
import * as iGqlResponses from '../../authors-portal-shared/models/graphql-responses';
import * as queries from './queries';

@Injectable()
export class MessagesGqlService {
  constructor(private apollo: Apollo) { }

  getMessages() {
    return this.apollo.watchQuery<iGqlResponses.GetMessagesResponse>({
      query: queries.getMessages
    }).valueChanges.pipe(map(res => res.data.getMessages));
  }
}
