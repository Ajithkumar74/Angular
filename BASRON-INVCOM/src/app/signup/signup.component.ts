import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  


  constructor(private authService: AuthService,private router: Router) { }
  
    onSignUp() {
  
  this.authService.signup({ username: this.username, email: this.email, password: this.password }).subscribe(response => {
    
        console.log('Signup successful:', response);
        this.router.navigate(['/login']);
      }, error => {
        console.error('Signup failed:', error);
      });
 
    }
}
