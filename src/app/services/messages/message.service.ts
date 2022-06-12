import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Conversation} from "../../domaine/message/conversation";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getConversation(id: string): Observable<Conversation[]>{
    return this.http.get<Conversation[]>(`http://localhost:3000/message/${id}`);
  }
}
