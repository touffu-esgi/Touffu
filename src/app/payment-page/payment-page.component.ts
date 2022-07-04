import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { BillService } from '../services/bill/bill.service';
import { Bill } from '../domaine/bill/bill';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {
  bill?: Bill;
  constructor(private route: ActivatedRoute, private authService: AuthServiceMockImplementation, private billService: BillService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if(param["id"]){
        this.billService.getOneBill(param["id"], this.authService.user!.id!).subscribe(bill => {
          this.bill = bill;
        }, error => {
          console.log(error);
        })
      }
    })
  }

}
