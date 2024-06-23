import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from '../../../app-routing/app-routing.module';

@Component({
  selector: 'app-personal',
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
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent implements OnInit {

  professionNationalityForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.professionNationalityForm = this.fb.group({
      profession: ['', Validators.required],
      nationality: ['', Validators.required]
    });
  }
    
    
  ngOnInit(): void {
    const personalData = localStorage.getItem('personalData');
    if (personalData) {
      this.professionNationalityForm.setValue(JSON.parse(personalData));
    }
  }

 

  get profession() : AbstractControl | null{
    return this.professionNationalityForm.get('profession');
  }

  get nationality() : AbstractControl | null{
    return this.professionNationalityForm.get('nationality');
  }


  submitDetails() {
    if (this.professionNationalityForm.valid) {
      localStorage.setItem('personalData', JSON.stringify(this.professionNationalityForm.value));
      console.log('Form Submitted', this.professionNationalityForm.value);
      this.router.navigate(['finances']);
    } else {
      console.log('Form is invalid');
    }
  }
 

  Backonauth() {
    this.router.navigate(['contact']);
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
