import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { passwordMatchValidator } from '../shared/password-match.directive';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/auth';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';



@Component({
  selector: 'app-customer-app-signup',
  standalone: true,
  imports: [HttpClientModule,
            CommonModule,
            BrowserModule,
            AppRoutingModule,
            RouterModule,
            FormsModule,
            InputTextModule,
            ReactiveFormsModule,
            ButtonModule,ToastModule,
            CardModule,
            BrowserAnimationsModule],
  templateUrl: './customer-app-signup.component.html',
  styleUrl: './customer-app-signup.component.css'
})
export class CustomerAppSignupComponent {

  registerForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    phone: ['',[Validators.required, Validators.pattern("^\d{3}-\d{3}-\d{4}$")]],
    password: ['',Validators.required],
    repeatPassword: ['',Validators.required]
  },{

  validators: passwordMatchValidator
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService ,
    private messageService:MessageService,
   private router :Router) {}

  get email() {
    return this.registerForm.controls['email'];
  }
  get phone(){
    return this.registerForm.controls['phone'];

  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get repeatPassword() {
    return this.registerForm.controls['repeatPassword'];
  }

  submitDetails(){
    const postData = { ...this.registerForm.value };

    delete postData.repeatPassword;
    this.authService.registerUser(postData as unknown as User).subscribe(
      response=>{
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
        this.router.navigate(['login'])
    },
      error=>
    {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
    }
  )
    
  }
 
}





// checkPasswords(group: FormGroup) {
//   const password = group.get('password')!.value;
//   const confirmPassword = group.get('repeatPassword')!.value;

//   return password === confirmPassword ? null : { passwordMismatch: true };
// }