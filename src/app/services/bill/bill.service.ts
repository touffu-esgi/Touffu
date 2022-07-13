import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtils } from '../../utils/http.utils';
import { Observable } from 'rxjs';
import { Bill } from '../../domaine/bill/bill';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { RecipientService } from '../recipient/recipient.service';
import { Recipient } from '../../domaine/recipient/recipient';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils, private recipientService: RecipientService) {

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

  generateBill(id: string, userId: string, bill: Bill[], recipient: Recipient) {
    const billdata: [[string, string, string]] = [["", "", ""]]
    const recipientData: [[string, string, string, string]] = [["", "", "", ""]]
    const currentBill = bill[0];
    billdata.push([currentBill.dateBill, currentBill.onePaymentValue.toString(), currentBill.total.toString()])
    recipientData.push([recipient.name, recipient.surname, recipient.phoneNumber, recipient.email])
    var doc = new jsPDF();
    (doc as any).autoTable({
      head: [['date', 'Cout unitaire', 'total']],
      body: billdata,
      theme: 'plain'
    });

    (doc as any).autoTable({
      head: [['nom', 'prénom', 'numéro de téléphone', 'email']],
      body: recipientData,
      theme: 'plain'
    })
    doc.save(`${currentBill.dateBill}-${currentBill.id}.pdf`);
  }
}
