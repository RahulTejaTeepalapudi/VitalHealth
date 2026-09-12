import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthBrandComponent } from '../../components/auth-brand/auth-brand.component';
import { OnboardingStepperComponent } from '../../components/onboarding-stepper/onboarding-stepper.component';
import { VerificationMethod } from '../../models/provider-registration.model';
import { ProviderOnboardingService } from '../../services/provider-onboarding.service';

@Component({ selector: 'app-verify-identity', imports: [RouterLink, AuthBrandComponent, OnboardingStepperComponent], templateUrl: './verify-identity.component.html', styleUrl: './verify-identity.component.scss' })
export class VerifyIdentityComponent {
  readonly selectedMethod = signal<VerificationMethod | null>('npi');
  constructor(private readonly onboarding: ProviderOnboardingService, private readonly router: Router) {}
  select(method: VerificationMethod): void { this.selectedMethod.set(method); }
  submit(): void { const method = this.selectedMethod(); if (!method) return; this.onboarding.selectVerification(method); void this.router.navigateByUrl('/auth/signup-success'); }
}
