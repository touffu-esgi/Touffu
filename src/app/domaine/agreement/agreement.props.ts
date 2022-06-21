export interface AgreementProps {
  id: string;
  recurring: boolean;
  recurrence?: string;
  providerRef: string;
  recipientRef: string;
  animalsRefs: string[];
  beginningDate: string;
  endDate: string;
  duration: number;
  remuneration: number;
}
