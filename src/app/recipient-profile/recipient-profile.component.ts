import { Component, OnInit } from '@angular/core';
import { Bill } from '../domaine/bill/bill';
import { BillService } from '../services/bill/bill.service';
import { AuthService } from '../services/auth/auth.service';
import { RecipientService } from '../services/recipient/recipient.service';
import { Recipient } from '../domaine/recipient/recipient';
import { Router } from '@angular/router';
import {ProviderData} from "../domaine/providerData";
import { Address } from '../domaine/address/address';

@Component({
  selector: 'app-recipient-profile',
  templateUrl: './recipient-profile.component.html',
  styleUrls: ['./recipient-profile.component.scss']
})
export class RecipientProfileComponent implements OnInit {

  bills: Bill[] = []
  provider?: ProviderData;
  message: string | null = 'Aucune facture';

  constructor(
    private billService: BillService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getBills();
  }

  private getBills(){
    if (this.authService.user?.userReference) {
      this.billService.getRecipientBills(this.authService.user?.userReference).subscribe(bills => {
        this.bills = bills;
        this.bills.forEach(bill => {
          bill.dateBill = bill.dateBill.split('T')[0]
        })
      }, error => {
        this.message = 'Aucune facture'
      })
    }
  }
}
