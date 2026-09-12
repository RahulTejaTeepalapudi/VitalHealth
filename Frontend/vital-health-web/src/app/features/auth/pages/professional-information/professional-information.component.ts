import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthBrandComponent } from '../../components/auth-brand/auth-brand.component';
import { OnboardingStepperComponent } from '../../components/onboarding-stepper/onboarding-stepper.component';
import { ProviderOnboardingService } from '../../services/provider-onboarding.service';

@Component({ selector: 'app-professional-information', imports: [ReactiveFormsModule, RouterLink, AuthBrandComponent, OnboardingStepperComponent], templateUrl: './professional-information.component.html', styleUrl: './professional-information.component.scss' })
export class ProfessionalInformationComponent {
  readonly states = ['CA', 'FL', 'NY', 'TX', 'WA'];
  readonly form = new FormGroup({ npiNumber: new FormControl('1234567890', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d{10}$/)] }), deaNumber: new FormControl('AB1234567', { nonNullable: true }), practiceName: new FormControl('Carter Family Care', { nonNullable: true, validators: Validators.required }), address: new FormControl('1234 Medical Center Dr', { nonNullable: true, validators: Validators.required }), city: new FormControl('Austin', { nonNullable: true, validators: Validators.required }), state: new FormControl('TX', { nonNullable: true, validators: Validators.required }), zipCode: new FormControl('78701', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^\d{5}$/)] }), phone: new FormControl('(800) 123-4567', { nonNullable: true, validators: Validators.required }) });
  constructor(private readonly onboarding: ProviderOnboardingService, private readonly router: Router) {}
  submit(): void { if (this.form.invalid) { this.form.markAllAsTouched(); return; } this.onboarding.saveProfessional(this.form.getRawValue()); void this.router.navigateByUrl('/auth/verify-identity'); }
}
