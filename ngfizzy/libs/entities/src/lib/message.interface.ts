export interface Message {
  id: number;
  read: boolean;
  message: string;
  audienceId: number;
  email: string;
  name: string;
}

export interface MessagesMap {
  [key: string]: Message;
}
