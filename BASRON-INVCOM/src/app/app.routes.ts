import { Routes } from '@angular/router';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
    { path: 'investments', loadComponent: () => import('./investments/investments.component').then(m => m.InvestmentsComponent) },
    { path: 'investment-detail/:id', loadComponent: () => import('./investment-detail/investment-detail.component').then(m => m.InvestmentDetailComponent) }
  ];