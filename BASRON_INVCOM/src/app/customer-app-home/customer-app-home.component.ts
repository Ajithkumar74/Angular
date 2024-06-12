import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-customer-app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './customer-app-home.component.html',
  styleUrl: './customer-app-home.component.css'
})
export class CustomerAppHomeComponent implements OnInit{

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/signin']);
    },5000);
  }

  redirectToSignIn() {
    this.router.navigate(['/signin']); // Assuming your signin component route is '/signin'
  }

}
