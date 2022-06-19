import { authServiceInterface } from './auth.service.interface';
import { User } from '../../domaine/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceMockImplementation implements authServiceInterface{

  public user?: User;

  constructor(private http: HttpClient) {
  }

  getUser(id: string): void {
    this.http.get<User>(`http://localhost:3000/user/${id}`).subscribe(user => {
      this.user = user;
    })
  }

}
