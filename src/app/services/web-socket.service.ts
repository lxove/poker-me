import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { io } from 'socket.io-client';

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
    this.socket = io('localhost:3000');
    this.socket.on('msgFromServer', data => {
      let chatMessage: ChatMessage = { text: data, self: false };
      console.log(data);
      this.updateMessages(chatMessage);
    });
  }

  sendMessage(msg: string) {
    console.log(`sending message: ${msg}`);
    let sMessage: ChatMessage = { text: msg, self: true };
    this.updateMessages(sMessage);
    this.socket.emit('msgToServer', msg);
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
