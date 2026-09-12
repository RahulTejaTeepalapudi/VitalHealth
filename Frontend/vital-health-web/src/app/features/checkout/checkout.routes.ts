import { Routes } from '@angular/router';
export const CHECKOUT_ROUTES: Routes = [
  { path: 'cart', loadComponent: () => import('./pages/cart-review/cart-review.component').then(m => m.CartReviewComponent) },
  { path: 'shipping', loadComponent: () => import('./pages/shipping/shipping.component').then(m => m.ShippingComponent) },
  { path: 'payment', loadComponent: () => import('./pages/payment/payment.component').then(m => m.PaymentComponent) },
  { path: 'card-details', loadComponent: () => import('./pages/card-details/card-details.component').then(m => m.CardDetailsComponent) },
  { path: 'review', loadComponent: () => import('./pages/order-review/order-review.component').then(m => m.OrderReviewComponent) },
  { path: 'processing', loadComponent: () => import('./pages/payment-processing/payment-processing.component').then(m => m.PaymentProcessingComponent) },
  { path: 'confirmation', loadComponent: () => import('./pages/order-confirmation/order-confirmation.component').then(m => m.OrderConfirmationComponent) },
  { path: '', pathMatch: 'full', redirectTo: 'cart' }
];
