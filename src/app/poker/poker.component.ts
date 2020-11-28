import { Component, OnInit } from '@angular/core';
import { Socket } from 'socket.io-client';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.less'],
})
export class PokerComponent implements OnInit {
  chatMessage: string;
  chatMessages$;

  constructor(private socket: WebSocketService) {
    this.chatMessages$ = this.socket.chatMessages;
  }

  sendMessage() {
    this.socket.sendMessage(this.chatMessage);
    this.chatMessage = '';
  }

  ngOnInit(): void {}
}
