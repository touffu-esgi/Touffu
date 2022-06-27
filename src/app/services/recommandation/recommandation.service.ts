import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recommendation } from '../../domaine/recommendation/recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecommandationService {

  constructor(private http: HttpClient) { }


  addRecommendation(recommendation:Recommendation): void{
    const body = JSON.stringify({
      "providerId": recommendation.providerId,
      "recipientId": recommendation.recipientId,
      "review": recommendation.review,
      "score": recommendation.score,
      "dateReview": new Date()
    })
    this.http.post("http://localhost:3000/recommendation", body, {headers: {'Content-Type': 'application/json'}}).subscribe()
  }

  getRecommendations(providerId: string): Observable<Recommendation[]>{
    return this.http.get<Recommendation[]>(`http://localhost:3000/recommendation/${providerId}`)
  }

}
