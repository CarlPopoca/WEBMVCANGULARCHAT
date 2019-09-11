import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../service/chat.service';
import { Message } from '../Interfaces';
import { Observable } from 'rxjs';
import { FormControl} from '@angular/forms'

//Un proyecto de angular se compone por componentes, modulos y servicios.
//Un modulo encapsula componentes
//Los componentes contienen el negocio
//Los servicios metodos o funciones que seran reutilizables

//Se declara  el selector(etiqueta html) que indenticara al componente y el html al que estara enlazado

@Component(
  {
    selector: 'chat-app',
    templateUrl: './chat.component.html'
  })

export class ChatComponent {
  //Se ocupa Observable para representar la lista en tiempo real y debe de usarse async cuando se utiliza una variable
  // en un html
  public lstMessages: Observable<Message[]>;

  //Con FormControl podemos ocupar controles declarados en el html, nos permite ligarlos 
  textControl = new FormControl('');
  nameControl = new FormControl('');
  //ViewChild y ElementRef nos permite acceder a las propiedades de un control html, en este caso
  //se le antepone # text al control en el html
  @ViewChild('text') text: ElementRef;

  //http: HttpClient: Para poder ejecutar metodos get, post, put y delete de una URL
  //@Inject("BASE_URL") baseUrl: string: Se inyecta para obtener la URL base del aplicativo
  //protected chatService: ChatService: Se inyecta el servicio que contiene la implementación de los metodos
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string, protected chatService: ChatService) {
    this.GetInfo();
  }
  //Proporciona los mensajes
  public GetInfo() {
    this.lstMessages = this.chatService.GetMessage();
  }
  //Registra lso mensajes
  public SendMessage() {
    this.chatService.Add(this.nameControl.value, this.textControl.value);
    //Se hace una espera para que se de el tiempo de que se registre el mensaje en la Base de datos
    //porque a veces tarda y no se alcanza a visualizar la información ingresada
    setTimeout(() => { this.GetInfo() }, 300);
    //Se limipa 
    this.textControl.setValue('');
    //Se pone el foco a la caja de texto de mensaje
    this.text.nativeElement.focus();
  }
}
