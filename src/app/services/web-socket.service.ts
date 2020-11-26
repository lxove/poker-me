import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket; // socket that connects to socket.io server

  constructor() {}

  connect() {
    this.socket = io(environment.ws_url);
    this.socket.on('Hello world', data => {
      console.log('Här kommer kanske data');
      console.log(data);
    });
  }
}
