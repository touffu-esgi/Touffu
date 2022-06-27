export class Report {
  reportedUserId: string;
  reporterUserId: string;
  comment: string;

  constructor(reportedUserId: string, reporterUserId: string, comment: string) {
    this.reportedUserId = reportedUserId;
    this.reporterUserId = reporterUserId;
    this.comment = comment;
  }
}
