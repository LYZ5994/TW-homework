import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  squareState: string; 
  darkTheme = false;

  constructor(private oc: OverlayContainer) {}

  switchTheme(dark) {
    this.darkTheme = dark;
    // 将黑夜模式应用到全局
    this.oc.themeClass = dark ? "myapp-dark-theme" : null;  
  }

}
