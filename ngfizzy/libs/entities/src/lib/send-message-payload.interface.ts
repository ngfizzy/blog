import { Audience } from './audience.interface';

export interface SendMessagePayload {
  audience: Audience;
  message: string;
}
