import { Component, OnInit } from '@angular/core';
import { Bill } from '../domaine/bill/bill';
import { ProviderData } from '../domaine/providerData';
import { BillService } from '../services/bill/bill.service';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { ProviderService } from '../services/provider/provider.service';

@Component({
  selector: 'app-recipient-profile',
  templateUrl: './recipient-profile.component.html',
  styleUrls: ['./recipient-profile.component.scss']
})
export class RecipientProfileComponent implements OnInit {

  bills: Bill[] = []
  provider?: ProviderData;
  constructor(
    private billService: BillService,
    private authService: AuthServiceMockImplementation,
  ) { }

  ngOnInit(): void {
    this.getBills();
  }

  private getBills(){
    if (this.authService.user?.id) {
      this.billService.getRecipientBills(this.authService.user?.id).subscribe(bills => {
        this.bills = bills;
        this.bills.forEach(bill => {
          bill.dateBill = bill.dateBill.split('T')[0]
        })
      })
    }
  }

}
