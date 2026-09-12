import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: `<main class="auth-page"><router-outlet /></main>`,
  styles: [`.auth-page{min-height:100vh;display:grid;place-items:center;padding:32px 18px;background:radial-gradient(circle at 15% 15%,#fff 0,#f7fbff 48%,#eef6fd 100%)}`]
})
export class AuthLayoutComponent {}
