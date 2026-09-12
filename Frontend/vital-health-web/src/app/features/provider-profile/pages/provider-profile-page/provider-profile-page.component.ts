import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProviderProfileService } from '../../services/provider-profile.service';

type ProfileTab = 'profile' | 'credentials' | 'practice' | 'notifications' | 'security';

@Component({ selector: 'app-provider-profile-page', imports: [ReactiveFormsModule], templateUrl: './provider-profile-page.component.html', styleUrl: './provider-profile-page.component.scss' })
export class ProviderProfilePageComponent {
  private readonly profileService = inject(ProviderProfileService);
  readonly activeTab = signal<ProfileTab>('profile');
  readonly editing = signal(false);
  readonly profile = this.profileService.getProfile();
  readonly form = new FormGroup({
    fullName: new FormControl(this.profile.fullName, { nonNullable: true }), email: new FormControl(this.profile.email, { nonNullable: true }), phone: new FormControl(this.profile.phone, { nonNullable: true }),
    npiNumber: new FormControl(this.profile.npiNumber, { nonNullable: true }), deaNumber: new FormControl(this.profile.deaNumber, { nonNullable: true }), specialty: new FormControl(this.profile.specialty, { nonNullable: true }),
    practiceName: new FormControl(this.profile.practiceName, { nonNullable: true }), address: new FormControl(this.profile.address, { nonNullable: true }), city: new FormControl(this.profile.city, { nonNullable: true }), state: new FormControl(this.profile.state, { nonNullable: true }), zipCode: new FormControl(this.profile.zipCode, { nonNullable: true })
  });
  setTab(tab: ProfileTab): void { this.activeTab.set(tab); }
  toggleEdit(): void { if (this.editing()) Object.assign(this.profile, this.profileService.saveProfile({ ...this.profile, ...this.form.getRawValue() })); this.editing.update(value => !value); }
}
