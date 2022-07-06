export class Report {
  reportedUserId: string;
  reportingUserId: string;
  comment: string;

  constructor(reportedUserId: string, reporterUserId: string, comment: string) {
    this.reportedUserId = reportedUserId;
    this.reportingUserId = reporterUserId;
    this.comment = comment;
  }
}
