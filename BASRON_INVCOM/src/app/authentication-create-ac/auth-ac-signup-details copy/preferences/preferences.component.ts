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
  selector: 'app-preferences',
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
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.css'
})
export class PreferencesComponent {
  
    preferencesForm: FormGroup;

  

    constructor(private fb: FormBuilder, private router: Router) {
  
      this.preferencesForm = this.fb.group({
        investmentGoals: ['', Validators.required],
        riskAppetite: ['', Validators.required],
        industryPreferences: ['', Validators.required]
      });
    }

    ngOnInit(): void {
      const preferencesData = localStorage.getItem('preferencesData');
      if (preferencesData) {
        this.preferencesForm.setValue(JSON.parse(preferencesData));
      }
    }
  
    get investmentGoals():AbstractControl | null  {
      return this.preferencesForm.get('investmentGoals');
    }
  
    get riskAppetite():AbstractControl | null  {
      return this.preferencesForm.get('riskAppetite');
    }
  
    get industryPreferences():AbstractControl | null  {
      return this.preferencesForm.get('industryPreferences');
    }
  
  
    submitDetails() {
      if (this.preferencesForm.valid) {
        localStorage.setItem('preferencesData', JSON.stringify(this.preferencesForm.value));
        console.log('Form Submitted', this.preferencesForm.value);
        this.router.navigate(['activity']);
      } else {
        console.log('Form is invalid');
      }
    }
  
   
  
  
    Backonauth() {
      this.router.navigate(['finances']); 
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
