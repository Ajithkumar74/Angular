import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from '../../../app-routing/app-routing.module';

@Component({
  selector: 'app-finances',
  standalone: true,
  imports: [HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,ToastModule,
    CardModule,
    MatIconModule],
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.css'
})
export class FinancesComponent {

  financesForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {

    this.financesForm = this.fb.group({
      annualIncome: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      netWorth: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      investmentExperience: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const financesData = localStorage.getItem('financesData');
    if (financesData) {
      this.financesForm.setValue(JSON.parse(financesData));
    }
  }
 
  get annualIncome(): AbstractControl | null {
    return this.financesForm.get('annualIncome');
  }

  get netWorth(): AbstractControl | null {
    return this.financesForm.get('netWorth');
  }

  get investmentExperience():AbstractControl | null  {
    return this.financesForm.get('investmentExperience');
  }

  submitDetails() {
    if (this.financesForm.valid) {
      localStorage.setItem('financesData', JSON.stringify(this.financesForm.value));
      console.log('Form Submitted', this.financesForm.value);
      this.router.navigate(['preferences']);
    } else {
      console.log('Form is invalid');
    }
  }
  


  Backonauth() {
    this.router.navigate(['personal']); 
  }

    
  FinancesTo() {
    this.router.navigate(['finances']);
  }
  PreferencesTo() {
    this.router.navigate(['preferences']);
  }
  AccountTo() {
    this.router.navigate(['account']);
  
  }
  
  PersonalTo() {
    this.router.navigate(['personal']);
  }
  
  ContactTo() {
    this.router.navigate(['contact']);
  }
  ProfileTo() {
    this.router.navigate(['profile']);
  
  }
}
