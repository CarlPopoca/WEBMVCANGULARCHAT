import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../service/chat.service';
import { Message } from '../Interfaces';
import { Observable } from 'rxjs';
import { FormControl} from '@angular/forms'

@Component(
  {
    selector: 'chat-app',
    templateUrl: './chat.component.html'
  })

export class ChatComponent {
  public lstMessages:Observable<Message[]>;
  textControl = new FormControl('');
  nameControl = new FormControl('');
  @ViewChild('text') text: ElementRef;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string, protected chatService: ChatService) {
    this.GetInfo();
  }
  public GetInfo() {
    this.lstMessages = this.chatService.GetMessage();
  }
  public SendMessage() {
    this.chatService.Add(this.nameControl.value, this.textControl.value);
    setTimeout(() => { this.GetInfo() }, 300);
    this.textControl.setValue('');
    this.text.nativeElement.focus();
  }
}
