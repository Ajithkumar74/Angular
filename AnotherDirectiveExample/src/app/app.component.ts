import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Data Binding';

  people = ["John", "Jack", "James", "Jordan"];
  
  frameworks = ["Vue", "Angular", "React"];
  
  carsList = [
    { carsBrand: 'Mercedes', carsCountry: 'Germany' },
    { carsBrand: 'BMW', carsCountry: 'Germany' },
    { carsBrand: 'Ferrari', carsCountry: 'Italy' },
    { carsBrand: 'Fiat', carsCountry: 'Italy' },
  ];
}
