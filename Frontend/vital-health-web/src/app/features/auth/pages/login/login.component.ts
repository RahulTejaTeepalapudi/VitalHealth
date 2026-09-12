import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthBrandComponent } from '../../components/auth-brand/auth-brand.component';

@Component({ selector: 'app-login', imports: [ReactiveFormsModule, RouterLink, AuthBrandComponent], templateUrl: './login.component.html', styleUrl: './login.component.scss' })
export class LoginComponent {
  readonly passwordVisible = signal(false);
  readonly form = new FormGroup({ email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }), password: new FormControl('', { nonNullable: true, validators: [Validators.required] }), rememberMe: new FormControl(true, { nonNullable: true }) });
  constructor(private readonly router: Router) {}
  submit(): void { void this.router.navigateByUrl('/dashboard'); }
}
