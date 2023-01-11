
import {Message} from "./message";
export class Conversation{
  conversation: string;
  lastMessage: string;
  public messages?: Message[];
  sender: string;

  constructor(conversation: string, lastMessage: string, sender: string, messages?: Message[]) {
    this.conversation = conversation;
    this.lastMessage = lastMessage;
    this.sender = sender;
    this.messages = messages;
  }
}
