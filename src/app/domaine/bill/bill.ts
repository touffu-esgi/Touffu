import { BillProps } from './bill.props';

export class Bill implements BillProps {
  id?: string;
  onePaymentValue: number;
  total: number;
  agreementRef: string;
  providerRef: string;
  recipientRef: string;
  datesAgreement: string[];
  dateBill: string;
  datePaid?: string;

  constructor(props: BillProps) {
    this.id = props.id;
    this.onePaymentValue = props.onePaymentValue;
    this.total = props.total;
    this.agreementRef = props.agreementRef;
    this.providerRef = props.providerRef;
    this.recipientRef = props.recipientRef;
    this.datesAgreement = props.datesAgreement;
    this.dateBill = props.dateBill;
    this.datePaid = props.datePaid;
  }
}
