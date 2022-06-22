export class Animal{
  name: string;
  id?: string;
  recipientId: string;
  type: string;
  constructor(name: string, recipientId: string, type: string, id?: string,) {
    this.name = name;
    this.id = id;
    this.recipientId = recipientId;
    this.type = type;
  }

}
