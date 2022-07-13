import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Report} from "../../domaine/report/report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  sendReport(report: Report): Observable<{ url: string }> {
    const body = JSON.stringify(report)
    return this.http.post<{ url: string }>(
      'http://localhost:3000/report',
      body,
      {headers: {'Content-Type': 'application/json'}}
    )
  }
}
