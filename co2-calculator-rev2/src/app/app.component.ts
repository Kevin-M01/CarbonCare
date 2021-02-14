import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  makeValue: string = "";
  
  constructor() {}

  public setMakeValue(make: string): void {

  }
}