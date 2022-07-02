export class Animal{
  name: string;
  id?: string;
  recipientId: string;
  type: string;
  isOnWalk: string | undefined;

  constructor(name: string, recipientId: string, type: string, id?: string, isOnWalk: string = "0") {
    this.name = name;
    this.id = id;
    this.recipientId = recipientId;
    this.type = type;
    this.isOnWalk = isOnWalk;
  }

}
