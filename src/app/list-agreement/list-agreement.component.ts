import { Component, OnInit } from '@angular/core';
import { AgreementService } from '../services/agreement/agreement.service';
import { Agreement } from '../domaine/agreement/agreement';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';

@Component({
  selector: 'app-list-agreement',
  templateUrl: './list-agreement.component.html',
  styleUrls: ['./list-agreement.component.scss']
})
export class ListAgreementComponent implements OnInit {

  constructor(private agreementService: AgreementService, private authService: AuthServiceMockImplementation) { }
  recipientAgreements?: Agreement[];
  ngOnInit(): void {
    this.agreementService.getAgreementByProviderId(this.authService.user!.id!).subscribe(data => {
      this.recipientAgreements = data;
    })
  }

}
