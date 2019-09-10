import { Component, Input } from '@angular/core';
import { Message } from '../Interfaces';

@Component(
  {
    selector: 'app-message',
    templateUrl: './message.component.html'
  })
export class MessageComponent {
  @Input() oMessage: Message;
}
