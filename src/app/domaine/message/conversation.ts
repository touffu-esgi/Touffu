
import {Message} from "./message";
export class Conversation{
  conversation: string;
  lastMessage: string;
  public messages?: Message[] = [];

  constructor(conversation: string, lastMessage: string, messages?: Message[]) {
    this.conversation = conversation;
    this.lastMessage = lastMessage;
    this.messages = messages;
  }


}
