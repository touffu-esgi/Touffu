export class Card{
  name: string;
  surname: string;
  cardNumber: string;
  endDate: string;
  cvv: string;

  constructor(name: string, surname: string, cardNumber: string, endDate: string, cvv: string) {
    this.name = name;
    this.surname = surname;
    this.cardNumber = cardNumber;
    this.endDate = endDate;
    this.cvv = cvv;
  }
}
