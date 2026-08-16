import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface ChatResponse {
  reply: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    private apiUrl = 'http://localhost:8080/api/chat';

  constructor(private http: HttpClient) {}

  askAI(message: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(
      this.apiUrl,
      {
        message: message
      }
    );
  }
}
