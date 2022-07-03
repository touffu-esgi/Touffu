import { Component, OnInit } from '@angular/core';
import { BillService } from '../services/bill/bill.service';
import { Bill } from '../domaine/bill/bill';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { ProviderData } from '../domaine/providerData';
import { ProviderService } from '../services/provider/provider.service';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.scss']
})
export class ProviderProfileComponent implements OnInit {
  bills: Bill[] = []
  provider?: ProviderData;
  constructor(
    private billService: BillService,
    private authService: AuthServiceMockImplementation,
    private providerService: ProviderService
) { }

  ngOnInit(): void {
    this.getProvider();
    this.getBills();
  }

  private getBills() {
    if (this.authService.user?.id) {
      this.billService.getProviderBills(this.authService.user?.id).subscribe(bills => {
        this.bills = bills;
        this.bills.forEach(bill => {
          bill.dateBill = bill.dateBill.split('T')[0]
        })
      })
    }
  }

  private getProvider() {
    console.log(this.authService?.user!.userReference!);
    this.providerService.getOneProviderByUrl(this.authService?.user?.userReference!).subscribe(provider => {
      this.provider = provider
    })
  }
}
