import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket; // socket that connects to socket.io server
  private chatMessages$ = new BehaviorSubject<ChatMessage[]>([]);
  private localMessages: ChatMessage[] = [];

  get chatMessages() {
    return this.chatMessages$.asObservable();
  }

  constructor() {
    this.socket = io(environment.ws_url);
    this.socket.on('recieve message', data => {
      let chatMessage: ChatMessage = { text: data, self: false };
      console.log(data);
      this.updateMessages(chatMessage);
    });
  }

  connect() {
    this.socket.on('Hello world', data => {
      console.log('Meddelande från server:');
      console.log(data);
    });
  }

  sendMessage(msg: string) {
    console.log(`sending message: ${msg}`);
    let sMessage: ChatMessage = { text: msg, self: true };
    this.updateMessages(sMessage);
    this.socket.emit('send message', msg);
  }

  updateMessages(message: ChatMessage) {
    this.localMessages.push(message);
    this.chatMessages$.next(this.localMessages);
  }
}

export class ChatMessage {
  text: string;
  self: boolean;
}
