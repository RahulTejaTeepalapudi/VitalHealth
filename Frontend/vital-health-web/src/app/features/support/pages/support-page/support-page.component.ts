import { Component } from "@angular/core";

@Component({
    selector: 'support-page',
    imports: [],
    templateUrl: './support-page.component.html',
    styleUrl: './support-page.component.scss'
})

export class SupportPageComponent{
    pageTitle: string = 'Support';
    pageDescription: string = 'Support functionality will be implemented in a future release.';
}
