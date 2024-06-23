import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from '../../../app-routing/app-routing.module';

@Component({
  selector: 'app-contact',
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
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.contactForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}(-\d{4})?$/)]]
    });
  }

  ngOnInit(): void {
    const contactData = localStorage.getItem('contactData');
    if (contactData) {
      this.contactForm.setValue(JSON.parse(contactData));
    }
  }


  get phoneNumber(): AbstractControl | null {
    return this.contactForm.get('phoneNumber');
  }

  get address(): AbstractControl | null {
    return this.contactForm.get('address');
  }

  get city() : AbstractControl | null{
    return this.contactForm.get('city');
  }

  get state(): AbstractControl | null {
    return this.contactForm.get('state');
  }

  get zipCode() : AbstractControl | null{
    return this.contactForm.get('zipCode');
  }

 

  submitDetails() {
    if (this.contactForm.valid) {

      localStorage.setItem('contactData', JSON.stringify(this.contactForm.value));
      console.log('Form Submitted', this.contactForm.value);
      this.router.navigate(['personal']);
      } else {
      console.log('Form is invalid');
    }
  }

 
  

  Backonauth() {
    this.router.navigate(['profile']);
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
