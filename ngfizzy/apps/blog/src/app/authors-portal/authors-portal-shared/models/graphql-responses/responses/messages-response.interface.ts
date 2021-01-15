import { Message, MessagesMap } from '@ngfizzy/entities';
import { BaseResponse } from '@ngfizzy/entities/graphql-responses';

export interface MessagesResponse extends BaseResponse {
  messages: Message[] | MessagesMap;
}

// export interface MessageResponse extends BaseResponse {
//   messages: Message;
// }
