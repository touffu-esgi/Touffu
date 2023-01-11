export class Message {
  id: string;
  content: string;
  dateSent: Date;
  senderId: string;
  recipientId: string;

  constructor(id: string, content: string, dateSent: Date, senderId: string, recipientId: string) {
    this.id = id;
    this.content = content;
    this.dateSent = dateSent;
    this.senderId = senderId;
    this.recipientId = recipientId;
  }
}
