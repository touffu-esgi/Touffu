import { Component, OnInit } from '@angular/core';
import {ReportService} from "../services/report/report.service";
import {Report} from "../domaine/report/report";

@Component({
  selector: 'app-report-provider',
  templateUrl: './report-provider.component.html',
  styleUrls: ['./report-provider.component.scss']
})
export class ReportProviderComponent implements OnInit {
  report: Report = new Report("", "", "")
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

}
