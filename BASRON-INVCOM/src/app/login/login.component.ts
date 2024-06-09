import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, provideRouter } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string='';
  password: string='';


  constructor(private router: Router){}

  onSubmit(){
    if(this.username==='test' && this.password === 'test'){
      this.router.navigate(['/investments']);
    }else{
      alert('Invalid credentials');
    }
  }
}
