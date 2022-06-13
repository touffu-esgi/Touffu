import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Conversation} from "../../domaine/message/conversation";
import {Message} from "../../domaine/message/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getConversation(id: string): Observable<Conversation[]>{
    return this.http.get<Conversation[]>(`http://localhost:3000/message/${id}`);
  }

  getMessages(conversation: string): Observable<Message[]> {
    return this.http.get<Message[]>(conversation);
  }

  sendMessage(message: string, id_sender: string, id_reciver: string) {
    const body = JSON.stringify({"content" : message, "senderId" : id_sender, "recipientId": id_reciver});
    return this.http.post("http://localhost:3000/message/",
      body,
      {headers: {'Content-Type': 'application/json'}})
  }
}
