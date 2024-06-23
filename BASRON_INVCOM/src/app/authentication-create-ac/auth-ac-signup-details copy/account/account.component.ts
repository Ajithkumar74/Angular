import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from '../../../app-routing/app-routing.module';

@Component({
  selector: 'app-account',
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
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent  implements OnInit {
  profileData: any;
  contactData: any;
  personalData: any;
  financesData: any;
  preferencesData: any;

  constructor(private router:Router) {}

  ngOnInit(): void {
    const profileData = localStorage.getItem('profileData');
    const contactData = localStorage.getItem('contactData');
    const personalData = localStorage.getItem('personalData');
    const financesData = localStorage.getItem('financesData');
    const preferencesData = localStorage.getItem('preferencesData');

    if (profileData) {
      this.profileData = JSON.parse(profileData);
    }
    if (contactData) {
      this.contactData = JSON.parse(contactData);
    }
    if (personalData) {
      this.personalData = JSON.parse(personalData);
    }
    if (financesData) {
      this.financesData = JSON.parse(financesData);
    }
    if (preferencesData) {
      this.preferencesData = JSON.parse(preferencesData);
    }
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

navigateTo() {
  this.router.navigate(['activity']);
}
Backonauth() {
  this.router.navigate(['preferences']);

}
  
  

}
