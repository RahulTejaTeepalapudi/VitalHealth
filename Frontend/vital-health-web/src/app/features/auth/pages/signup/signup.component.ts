import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthBrandComponent } from '../../components/auth-brand/auth-brand.component';
import { OnboardingStepperComponent } from '../../components/onboarding-stepper/onboarding-stepper.component';
import { ProviderOnboardingService } from '../../services/provider-onboarding.service';

@Component({ selector: 'app-signup', imports: [ReactiveFormsModule, RouterLink, AuthBrandComponent, OnboardingStepperComponent], templateUrl: './signup.component.html', styleUrl: './signup.component.scss' })
export class SignupComponent {
  readonly passwordVisible = signal(false);
  readonly form = new FormGroup({ fullName: new FormControl('Dr. James Carter', { nonNullable: true, validators: Validators.required }), email: new FormControl('name@practice.com', { nonNullable: true, validators: [Validators.required, Validators.email] }), password: new FormControl('$#KH87329@#AFbns!098', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }), terms: new FormControl(true, { nonNullable: true, validators: Validators.requiredTrue }) });
  constructor(private readonly onboarding: ProviderOnboardingService, private readonly router: Router) {}
  submit(): void { if (this.form.invalid) { this.form.markAllAsTouched(); return; } const { fullName, email, password } = this.form.getRawValue(); this.onboarding.saveAccount({ fullName, email, password }); void this.router.navigateByUrl('/auth/professional-information'); }
}
