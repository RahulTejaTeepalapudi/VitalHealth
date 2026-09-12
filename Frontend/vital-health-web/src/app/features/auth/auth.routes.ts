import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const AUTH_ROUTES: Routes = [{
  path: '', component: AuthLayoutComponent, children: [
    { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
    { path: 'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent) },
    { path: 'professional-information', loadComponent: () => import('./pages/professional-information/professional-information.component').then(m => m.ProfessionalInformationComponent) },
    { path: 'verify-identity', loadComponent: () => import('./pages/verify-identity/verify-identity.component').then(m => m.VerifyIdentityComponent) },
    { path: 'signup-success', loadComponent: () => import('./pages/signup-success/signup-success.component').then(m => m.SignupSuccessComponent) },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
  ]
}];
