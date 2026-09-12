import { Injectable, signal } from '@angular/core';
import { AccountDetails, ProfessionalDetails, ProviderRegistration, VerificationMethod } from '../models/provider-registration.model';

@Injectable({ providedIn: 'root' })
export class ProviderOnboardingService {
  private readonly registrationState = signal<ProviderRegistration>({ account: null, professional: null, verificationMethod: null });
  readonly registration = this.registrationState.asReadonly();

  saveAccount(account: AccountDetails): void {
    this.registrationState.update(current => ({ ...current, account }));
  }

  saveProfessional(professional: ProfessionalDetails): void {
    this.registrationState.update(current => ({ ...current, professional }));
  }

  selectVerification(method: VerificationMethod): void {
    this.registrationState.update(current => ({ ...current, verificationMethod: method }));
  }
}
