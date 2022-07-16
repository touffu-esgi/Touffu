import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUtils } from '../../utils/http.utils';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  isAlive(): Observable<boolean>{
    return this.http.get<boolean>(`${this.httpUtils.fullUrl()}/health`)
  }
}
