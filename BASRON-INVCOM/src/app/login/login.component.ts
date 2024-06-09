import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  Username: string = '';
  Password: string = '';

  

  constructor(private authService: AuthService,private router: Router) { }

  onLogin() {
    this.authService.login({ Username: this.Username, password: this.Password }).subscribe(response => {
      console.log('Login successful:', response);
      this.router.navigate(['/investments']); 

    }, error => {
      console.error('Login failed:', error);
    });
  }
 
    
 


}



  

