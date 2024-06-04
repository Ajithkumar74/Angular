import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBindingEx';
  heading = 'Event & Two-Way Data Binding';
  twoway =
    'this text value is already defined on the source code, this input element rendered it because it is bound to the data now if you edit this, the data in the source then will change too because the data is bound also to the input element.';
  isDisabled = true;
  name = 'Hide';
  showMessage=true;

  disable() {
    this.isDisabled = !this.isDisabled;
    this.name = this.isDisabled ? 'Hide' : 'Show';
    this.showMessage=!this.isDisabled;
  }
  }

