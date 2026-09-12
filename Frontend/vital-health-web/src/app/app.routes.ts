import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES)
      },
      {
        path: 'medications',
        loadComponent: () =>
          import('./features/medications/pages/medications-page/medications-page.component')
            .then(m => m.MedicationsPageComponent)
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./features/orders/pages/orders-page/orders-page.component')
            .then(m => m.OrdersPageComponent)
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./features/patients/pages/patients-page/patients-page.component')
            .then(m => m.PatientsPageComponent)
      },
      {
        path: 'prescriptions',
        loadComponent: () =>
          import('./features/prescriptions/pages/prescriptions-page/prescriptions-page.component')
            .then(m => m.PrescriptionsPageComponent)
      },
      {
        path: 'invoices',
        loadComponent: () =>
          import('./features/invoices/pages/invoices-page/invoices-page.component')
            .then(m => m.InvoicesPageComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/pages/settings-page/settings-page.component')
            .then(m => m.SettingsPageComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/provider-profile/pages/provider-profile-page/provider-profile-page.component').then(m => m.ProviderProfilePageComponent)
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./features/support/pages/support-page/support-page.component')
            .then(m => m.SupportPageComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
