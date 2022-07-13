export class Position{
  agreementRef: string
  xCoordinate: number
  yCoordinate: number

  constructor(agreementRef: string, xCoordinate: number, yCoordinate: number) {
    this.agreementRef = agreementRef;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }
}
