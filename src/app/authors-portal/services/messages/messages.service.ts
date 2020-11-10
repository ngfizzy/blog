
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessagesGqlService } from './messages-gql.service';
import { arrayToMap } from '../../../shared/utils';
import { Message } from 'src/app/shared/models';

@Injectable()
export class  MessagesService {
  constructor(private messagesGqlService: MessagesGqlService) { }

  getMessages() {
    return this.messagesGqlService.getMessages();
  }

  getMessagesAsMap() {
    return this.getMessages()
    .pipe(map(res => {
      const messagesMap = arrayToMap(res.messages as Message[]);

      return { error: res.error, messages: messagesMap };
    }));
  }
}
