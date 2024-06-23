import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormsModule, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from '../../../app-routing/app-routing.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,ToastModule,
    CardModule,
    MatIconModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      profileName: ['', Validators.required],
      dob: ['', Validators.required]
    });

  }

  
  ngOnInit(): void {
    const storedProfileData = localStorage.getItem('profileData');
    if (storedProfileData) {
      this.registerForm.patchValue(JSON.parse(storedProfileData));
    }
  }

  get profileName(): AbstractControl | null  {
    return this.registerForm.get('profileName');
  }

  get dob(): AbstractControl | null  {
    return this.registerForm.get('dob');
  }

  saveProfileData() {
    if (this.registerForm.valid) {
      localStorage.setItem('profileData', JSON.stringify(this.registerForm.value));
      console.log('Profile data saved:', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  submitDetails() {
    if (this.registerForm.valid) {
      this.saveProfileData(); 
      this.router.navigate(['contact']);
    } else {
      console.log('Form is invalid');
    }
  }


  Backonauth() {
    this.router.navigate(['auth-signup']);
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
  onActivity() {
    this.router.navigate(['contact']);
  
  }

}
