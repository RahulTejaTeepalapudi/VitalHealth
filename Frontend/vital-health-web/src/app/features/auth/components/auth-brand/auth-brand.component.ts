import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-brand',
  template: `<a class="brand" href="/" aria-label="VitalHealth home"><img src="/images/brand/vital-health-logo.png" alt="VitalHealth" /><span>PHARMACY FOR HEALTHCARE PROVIDERS</span></a>`,
  styles: [`
    .brand{display:grid;justify-items:center;color:#77859b;text-decoration:none;font-size:9px;letter-spacing:.2px}
    img{width:128px;height:94px;object-fit:contain;margin-bottom:-12px}
  `]
})
export class AuthBrandComponent {}
