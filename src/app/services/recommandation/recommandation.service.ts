import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recommendation } from '../../domaine/recommendation/recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecommandationService {

  constructor(private http: HttpClient) { }


  addRecommendation(providerId: string, userId: string, recoText: string, number: number, date: Date): void{
    const body = JSON.stringify({
      "providerId": providerId,
      "recipientId": userId,
      "review": recoText,
      "score": 2.2,
      "dateReview": "2022/06/11"
    })
    this.http.post("http://localhost:3000/recommendation", body, {headers: {'Content-Type': 'application/json'}}).subscribe()
  }

  getRecommendations(providerId: string): Observable<Recommendation[]>{
    return this.http.get<Recommendation[]>(`http://localhost:3000/recommendation/${providerId}`)
  }

}
