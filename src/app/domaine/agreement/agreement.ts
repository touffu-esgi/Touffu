import { AgreementProps } from './agreement.props';

export class Agreement implements AgreementProps{
  id?: string;
  recurring: boolean;
  providerRef: string;
  recipientRef: string;
  animalsRefs: string[];
  beginningDate: string;
  endDate: string;
  recurrence?: string;
  duration: number;
  remuneration: number;

  constructor(agreementProps: AgreementProps) {
    this.id = agreementProps.id;
    this.recurring = agreementProps.recurring;
    this.providerRef = agreementProps.providerRef;
    this.recipientRef = agreementProps.recipientRef;
    this.animalsRefs = agreementProps.animalsRefs;
    this.beginningDate = agreementProps.beginningDate;
    this.endDate = agreementProps.endDate;
    this.recurrence = agreementProps.recurrence;
    this.duration = agreementProps.duration;
    this.remuneration = agreementProps.remuneration;
  }
}
