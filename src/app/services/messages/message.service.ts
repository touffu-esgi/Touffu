import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Conversation} from "../../domaine/message/conversation";
import {Message} from "../../domaine/message/message";
import {HttpUtils} from "../../utils/http.utils";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }
  private baseUrl: string = this.httpUtils.fullUrl()

  getConversation(id: string): Observable<Conversation[]>{
    return this.http.get<Conversation[]>(`${this.baseUrl}/message/${id}`);
  }

  getMessages(conversation: string): Observable<Message[]> {
    return this.http.get<Message[]>(conversation);
  }

  sendMessage(message: string, id_sender: string, id_reciver: string) {
    const body = JSON.stringify({"content" : message, "senderId" : id_sender, "recipientId": id_reciver});
    return this.http.post(`${this.baseUrl}/message/`,
      body,
      {headers: {'Content-Type': 'application/json'}})
  }
}
