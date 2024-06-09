import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestmentService } from '../investment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-detail.component.html',
  styleUrl: './investment-detail.component.css'
})
export class InvestmentDetailComponent implements OnInit {
  investment: any;

  constructor(
    private route: ActivatedRoute,
    private investmentService: InvestmentService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.investmentService.getInvestmentById(id!).subscribe(data => {
      this.investment = data;
    });
  }

  acknowledgeInvestment() {
    // Implement the acknowledgment logic here
    alert('Investment acknowledged');
  }
}



