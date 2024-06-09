import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  Username: string = '';
  Password: string = '';

  constructor(private authService: AuthService,private router: Router) { }

  onLogin() {
    this.authService.login({ Username: this.Username, password: this.Password }).subscribe(response => {
      console.log('Login successful:', response);
    }, error => {
      console.error('Login failed:', error);
    });
  }
    onSignUp() {
      this.authService.signup({ username: this.username, email: this.email, password: this.password }).subscribe(response => {
        console.log('Signup successful:', response);
      }, error => {
        console.error('Signup failed:', error);
      });
 


}
}


  

