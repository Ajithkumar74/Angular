import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentService } from '../investment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css'
})
export class InvestmentsComponent  implements OnInit{
  investments: any[] = [];

  constructor(private investmentService: InvestmentService, private router: Router) { }

  ngOnInit(): void {
    this.investmentService.getInvestments().subscribe(data => {
      this.investments = data;
    });
  }
  viewInvestmentDetail(id: string) {
    this.router.navigate(['/investment-detail', id]);
  }
}
