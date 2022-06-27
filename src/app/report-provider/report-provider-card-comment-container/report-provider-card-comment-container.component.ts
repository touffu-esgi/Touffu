import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-report-provider-card-comment-container',
  templateUrl: './report-provider-card-comment-container.component.html',
  styleUrls: ['./report-provider-card-comment-container.component.scss']
})
export class ReportProviderCardCommentContainerComponent implements OnInit {

  @Output() pushReportValue: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendReportComment(content: string) {
    this.pushReportValue.emit(content)
  }

}
