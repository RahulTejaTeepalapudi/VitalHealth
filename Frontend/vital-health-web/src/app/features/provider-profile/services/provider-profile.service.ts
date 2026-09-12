import { Injectable } from '@angular/core';
import { PROVIDER_PROFILE } from '../data/provider-profile.mock-data';
import { ProviderProfile } from '../models/provider-profile.model';

@Injectable({ providedIn: 'root' })
export class ProviderProfileService {
  getProfile(): ProviderProfile { return { ...PROVIDER_PROFILE }; }
  saveProfile(profile: ProviderProfile): ProviderProfile { return { ...profile }; }
}
