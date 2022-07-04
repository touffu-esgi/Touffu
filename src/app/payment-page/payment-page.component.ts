import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { BillService } from '../services/bill/bill.service';
import { Bill } from '../domaine/bill/bill';
import { Card } from '../domaine/card/card';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {
  bill?: Bill;
  card: Card = new Card('', '', '', '', '')
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthServiceMockImplementation, private billService: BillService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if(param["id"]){
        this.billService.getOneBill(param["id"], this.authService.user!.id!).subscribe(bill => {
          this.bill = bill;
        }, error => {
          this.router.navigate(["/recipient-profile"])
        })
      }
    })
  }

  date() {
    const date = new Date();
    const month =  date.getMonth().toString().length == 1 ? `0${date.getMonth()}/` : `${date.getMonth()}/`
    const year = date.getFullYear().toString().slice(2)
    return month + year ;
  }

  updateBill() {
    console.log("bonjour");

  }

  formatEndDate(endDateInput: HTMLInputElement) {
    const endDate = this.card.endDate;
    if (endDate.length == 2 && endDate.split("/").length == 1){
      endDateInput.value = endDateInput.value + '/';
    }else if(endDate.split("/")[0].length != 2){
      endDateInput.value = endDateInput.value.slice(0,1);
    }
  }
}
