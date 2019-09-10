import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../service/chat.service';
import { Message } from '../Interfaces';
import { Observable } from 'rxjs';

@Component(
  {
    selector: 'chat-app',
    templateUrl: './chat.component.html'
  })

export class ChatComponent {
  public lstMessages:Observable<Message[]>;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string, protected chatService: ChatService) {
    this.GetInfo();
  }
  public GetInfo() {
    this.lstMessages = this.chatService.GetMessage();
  }

}
