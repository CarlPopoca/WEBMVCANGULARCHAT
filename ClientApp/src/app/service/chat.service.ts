import { Injectable, Inject } from '@angular/core';
import { Message, MyResponse } from '../Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Se establece el tipo de dato que se recibira en la cabecera y si se ocupara autorización por token
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

  //protected sobre una tipo de variable que debe ser inyectado en el constructor hace que la inyección
  // de dependencias no necesite ser seteada a una variable del mismo tipo declarada en la clase
  constructor(protected http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  public GetMessage():Observable<Message[]> {
    //Se consume el servicio que proporciona los mensajes
    return this.http.get<Message[]>(this.baseUrl + "api/Chat/Message");
  }
  public Add(name, text) {
    //Se consume el servicio que guadar los mensajes, en caso de que la transacción sea satisfactoria
    // o no lo sea se registrara en la pestaña de consola de la pagina web
    this.http.post<MyResponse>(this.baseUrl + 'api/Chat/Add',
      { 'Name': name, 'Text': text }, HttpOptions).subscribe(
        result => { console.log(result) },
        error => console.error(error));
  }
}
