import { Message, MessagesMap } from '../../../../../shared/models/'
import { BaseResponse } from '../../../../../shared/models/graphql-responses/responses'

export interface MessagesResponse extends BaseResponse {
  messages: Message[] | MessagesMap;
}

export interface MessageResponse extends BaseResponse {
  messages: Message;
}
