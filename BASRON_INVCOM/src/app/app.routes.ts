import { Routes } from '@angular/router';
export const routes: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', loadComponent: () => import('./customer-app-home/customer-app-home.component').then(m => m.CustomerAppHomeComponent) },
        { path: 'signin', loadComponent: () => import('./customer-app-signin/customer-app-signin.component').then(m => m.CustomerAppSigninComponent) },
        { path: 'signup', loadComponent: () => import('./customer-app-signup/customer-app-signup.component').then(m => m.CustomerAppSignupComponent) },
        { path: 'reset-password', loadComponent: () => import('./customer-app-signup/reset-password/reset-password.component').then(m=> m.ResetPasswordComponent) },
        { path: 'login', loadComponent: () => import('./customer-app-login/customer-app-login.component').then(m => m.CustomerAppLoginComponent) },

        {path:'phone',loadComponent:()=>import('./phone-auth/phone-number/phone-number.component').then(m=> m.PhoneNumberComponent)},
        {path:'code',loadComponent:()=>import('./phone-auth/code/code.component').then(m=> m.CodeComponent)},
        {path:'dashboard',loadComponent:()=>import('./phone-auth/dashboard/dashboard.component').then(m=> m.DashboardComponent)},
        { path: '', redirectTo: '/phone', pathMatch: 'full' },





];
