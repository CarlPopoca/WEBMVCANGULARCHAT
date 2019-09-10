import { Injectable, Inject } from '@angular/core';
import { Message } from '../Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  baseUrl: string;
  
  constructor(protected http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  public GetMessage():Observable<Message[]> {
    
    return this.http.get<Message[]>(this.baseUrl + "api/Chat/Message");
  }
}
