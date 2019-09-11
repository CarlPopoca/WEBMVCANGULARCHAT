import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Se añade ReactiveFormsModule para que funcione adecuadamente formControl
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
//Se establecen las rutas de las Clases de los componentes de Chat y Message
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
//Se establece la ruta del servicio de chat
import { ChatService } from './service/chat.service';

//Cada modulo puede encapsular componentes
//En declarations: Se encapsulan las clases de los componentes ChatComponent y MessageComponent dentro de este modulo
//En RouterModule: se agrega el nombre de la carpeta chat y la clase ChatComponent para que obtenga dentro de esta
// la ruta del html que desplegara en el navegador
//En providers: se añade el servicio ChatService para que sea reconocido como un servicio
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ChatComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'chat', component: ChatComponent }
    ])
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
