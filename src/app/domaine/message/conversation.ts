export class Conversation{
  conversation: string;
  lastMessage: string;

  constructor(conversation: string, lastMessage: string) {
    this.conversation = conversation;
    this.lastMessage = lastMessage;
  }

}
