import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Report} from "../../domaine/report/report";
import {HttpUtils} from "../../utils/http.utils";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  private baseUrl: string = this.httpUtils.fullUrl()

  sendReport(report: Report): Observable<{ url: string }> {
    const body = JSON.stringify(report)
    return this.http.post<{ url: string }>(
      `${this.baseUrl}/report`,
      body,
      {headers: {'Content-Type': 'application/json'}}
    )
  }
}
