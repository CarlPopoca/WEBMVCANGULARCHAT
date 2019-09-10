import { Injectable, Inject } from '@angular/core';
import { Message, MyResponse } from '../Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':'my-auth-token'
  })
}

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
  public Add(name, text) {
    this.http.post<MyResponse>(this.baseUrl + 'api/Chat/Add',
      { 'Name': name, 'Text': text }, HttpOptions).subscribe(
        result => { console.log(result) },
        error => console.error(error));
  }
}
