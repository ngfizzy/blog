import { BaseResponse } from './base-response.interface';

export interface MessageResponse extends BaseResponse {
  success: boolean;
}

export interface SendMessageResponse {
  sendMessage: MessageResponse;
}
