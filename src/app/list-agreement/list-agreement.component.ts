import { Component, OnInit } from '@angular/core';
import { AgreementService } from '../services/agreement/agreement.service';
import { Agreement } from '../domaine/agreement/agreement';
import { AuthService } from '../services/auth/auth.service';
import {displayDate} from "../utils/date-time.utils";

@Component({
  selector: 'app-list-agreement',
  templateUrl: './list-agreement.component.html',
  styleUrls: ['./list-agreement.component.scss']
})
export class ListAgreementComponent implements OnInit {

  constructor(private agreementService: AgreementService, private authService: AuthService) { }
  Agreements?: Agreement[];
  ngOnInit(): void {
    if(this.authService.user?.userType == "recipient"){
      this.agreementService.getAgreementByRecipientId(this.authService.user!.userReference!.split('/')[4]).subscribe(data => {
        this.Agreements = data;
      })
    }else{
      this.agreementService.getAgreementByProviderId(this.authService.user!.userReference!.split('/')[4]).subscribe(data => {
        this.Agreements = data;
      })
    }
  }

  formatDate(date: string): string {
    return displayDate(new Date(date));
  }

  formatDuration (duration: number): string {
    const hour = parseInt((duration / 60).toString())
    const min = duration % 60 === 0 ? '' : duration % 60;
    return `${hour}h${min}`
  }
}
