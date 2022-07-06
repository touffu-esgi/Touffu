import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-report-provider-button-send',
  templateUrl: './report-provider-button-send.component.html',
  styleUrls: ['./report-provider-button-send.component.scss']
})
export class ReportProviderButtonSendComponent implements OnInit {

  @Output() sendReport: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  reportUser() {
    this.sendReport.emit()
  }

}
