import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CheckoutService } from '../../services/checkout.service';
@Component({ selector:'app-cart-review', imports:[CurrencyPipe,RouterLink], templateUrl:'./cart-review.component.html', styleUrl:'./cart-review.component.scss' })
export class CartReviewComponent { readonly checkout=inject(CheckoutService); }
