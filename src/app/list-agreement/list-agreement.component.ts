import { Component, OnInit } from '@angular/core';
import { AgreementService } from '../services/agreement/agreement.service';
import { Agreement } from '../domaine/agreement/agreement';
import { AuthService } from '../services/auth/auth.service';

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

}
