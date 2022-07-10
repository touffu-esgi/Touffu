import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtils } from '../../utils/http.utils';
import { Observable } from 'rxjs';
import { Bill } from '../../domaine/bill/bill';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) {

  }

  getProviderBills(providerId: string): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.httpUtils.fullUrl() + `/bill?providerRef=${providerId}`);
  }

  getRecipientBills(recipientId: string): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.httpUtils.fullUrl() + `/bill?recipientRef=${recipientId}`);
  }

  PayABill(billId: string) {
    const body = JSON.stringify({"billId": billId});
    console.log(body);
    return this.http.put(this.httpUtils.fullUrl() + `/bill`, body, {headers: {'Content-Type': 'application/json'}});
  }

  getOneBill(billId: string, userId: string): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.httpUtils.fullUrl() + `/bill?id=${billId}&recipientRef=${userId}`);
  }

  getOneBillByProviderId(billId: string, providerId: string): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.httpUtils.fullUrl() + `/bill?id=${billId}&providerRef=${providerId}`);
  }

  generateBill(id: string, userId: string) {
    const head = [['date', 'Cout unitaire', 'total']]
    const billTab: [[string, string, string]] = [["", "", ""]]
    this.getOneBillByProviderId(id, userId).subscribe(bill => {
      billTab.push([bill[0].dateBill, bill[0].onePaymentValue.toString(), bill[0].total.toString()])
      var doc = new jsPDF();
      (doc as any).autoTable({
        head: head,
        body: billTab,
        theme: 'plain'
      })
      doc.save(`${bill[0].dateBill}-${bill[0].id}.pdf`);
    });
  }
}
