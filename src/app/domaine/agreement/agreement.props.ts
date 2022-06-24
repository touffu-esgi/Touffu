export interface AgreementProps {
  id?: string;
  recurring: boolean;
  recurrence?: string;
  provider: string;
  recipient: string;
  animalsRefs: string[];
  beginningDate: string;
  endDate: string;
  duration: number;
  remuneration: number;
  status?: string;
}
