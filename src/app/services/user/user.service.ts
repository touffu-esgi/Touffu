import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtils } from '../../utils/http.utils';
import { Observable } from 'rxjs';
import { User } from '../../domaine/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  update(id: string, email: string): Observable<never> {
    const body = JSON.stringify({"email": email})
    return this.http.put<never>(`${this.httpUtils.fullUrl()}/user/${id}`, body, {headers: {'Content-Type': 'application/json'}})
  }

  addUser(user: User): Observable<string>{
    const body = JSON.stringify(user);
    return this.http.post<string>(`${this.httpUtils.fullUrl()}/user`, body, {headers: {'Content-Type': 'application/json'}})
  }

}

