import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  @ViewChild('buttonElement') buttonElement: ElementRef;

  ngOnInit(): void {}

  takeSeat(): void {}
}
