import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-customer-app-signin',
  standalone: true,
  imports: [HttpClientModule,RouterModule,CommonModule,FormsModule,InputTextModule,ReactiveFormsModule],
  templateUrl: './customer-app-signin.component.html',
  styleUrl: './customer-app-signin.component.css'
})
export class CustomerAppSigninComponent {
  constructor(private router: Router ) { }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }
  
}
