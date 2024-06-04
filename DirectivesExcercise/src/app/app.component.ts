import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DirectivesExcercise';
  users = [
    { id: 1, label: 'Fabio', age: 15, gender: 'male', url: 'http://www.angular.io' },
    { id: 2, label: 'Filippo', age: 22, gender: 'male', url: 'http://www.google.com' },
    { id: 3, label: 'Silvia', age: 55, gender: 'female', url: 'http://www.apple.com' },
    { id: 5, label: 'Fabiola', age: 35, gender: 'female', url: 'http://www.apple.com' },
  ];
}
