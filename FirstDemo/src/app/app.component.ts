import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`<app-server></app-server> <app-server></app-server>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstDemo';
}
