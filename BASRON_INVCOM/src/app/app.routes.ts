import { Routes } from '@angular/router';
export const routes: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', loadComponent: () => import('./customer-app-home/customer-app-home.component').then(m => m.CustomerAppHomeComponent) },
        { path: 'signin', loadComponent: () => import('./customer-app-signin/customer-app-signin.component').then(m => m.CustomerAppSigninComponent) },
        { path: 'signup', loadComponent: () => import('./customer-app-signup/customer-app-signup.component').then(m => m.CustomerAppSignupComponent) },
        { path: 'reset-password', loadComponent: () => import('./customer-app-signup/reset-password/reset-password.component').then(m=> m.ResetPasswordComponent) }
];
