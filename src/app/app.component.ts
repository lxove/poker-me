import { ngModuleJitUrl } from '@angular/compiler';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  navigator: Navigator;
  window: Window;

  constructor(private socket: WebSocketService) {
    socket.connect();
  }

  ngOnInit() {}

  // helloWorld(): void {
  //   var result = window.confirm('Är det okej att visa aviseringar?');
  //   if (result) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       alert(
  //         `Du befinner dig på positionen: ${position.coords.latitude}, ${position.coords.longitude}`,
  //       );
  //     });
  //   }
  // }

  // hoverWorld(): void {
  //   console.log("Hover world!");
  // }
}

export class PokerPlayer {
  name: string;
}
