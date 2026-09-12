import { Component, input } from '@angular/core';

@Component({
  selector: 'app-onboarding-stepper',
  templateUrl: './onboarding-stepper.component.html',
  styleUrl: './onboarding-stepper.component.scss'
})
export class OnboardingStepperComponent { readonly currentStep = input.required<number>(); }
