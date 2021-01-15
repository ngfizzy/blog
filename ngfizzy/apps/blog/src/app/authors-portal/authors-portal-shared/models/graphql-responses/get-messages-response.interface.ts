import { BaseResponse } from '@ngfizzy/entities/graphql-responses';
import { MessagesResponse, MessageResponse } from './responses';

export interface GetMessagesResponse {
  getMessages: MessagesResponse;
}

export interface GetMessageResponse extends BaseResponse {
  message: MessageResponse;
}

