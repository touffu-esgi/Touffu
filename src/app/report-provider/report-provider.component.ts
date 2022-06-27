import { Component, OnInit } from '@angular/core';
import {ReportService} from "../services/report/report.service";
import {Report} from "../domaine/report/report";
import {ActivatedRoute} from "@angular/router";
import {AuthServiceMockImplementation} from "../services/auth/auth.service.mock.implementation";

@Component({
  selector: 'app-report-provider',
  templateUrl: './report-provider.component.html',
  styleUrls: ['./report-provider.component.scss']
})
export class ReportProviderComponent implements OnInit {
  report: Report = new Report("", "", "")
  constructor(
    private reportService: ReportService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthServiceMockImplementation) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['user']) this.report.reportedUserId = params['user'];
    })
    this.report.reportingUserId = this.authService.user!.id!
  }


  setReportComment(commentContent: string) {
    this.report.comment = commentContent;
  }

  sendReport() {
    this.reportService.sendReport(this.report).subscribe()
  }
}
