import { authServiceInterface } from './auth.service.interface';
import { User } from '../../domaine/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements authServiceInterface{

  public user?: User;

  constructor(private http: HttpClient, private router: Router) {
    if(!this.user){
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
  }

  getUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    return this.http.post<User>(`http://localhost:3000/user/login`, body, {headers: {'Content-Type': 'application/json'}})
  }

  signOut() {
    localStorage.clear();
    this.user = undefined;
    this.router.navigate([`/`])
  }
}
