import { Component, input } from '@angular/core';

@Component({ selector: 'app-checkout-stepper', templateUrl: './checkout-stepper.component.html', styleUrl: './checkout-stepper.component.scss' })
export class CheckoutStepperComponent { readonly currentStep = input.required<number>(); }
