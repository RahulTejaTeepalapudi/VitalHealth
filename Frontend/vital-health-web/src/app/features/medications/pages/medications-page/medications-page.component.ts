import { Component } from "@angular/core";

@Component({
    selector: 'medications-page',
    imports: [],
    templateUrl: './medications-page.component.html',
    styleUrl: './medications-page.component.scss'
})

export class MedicationsPageComponent{
    pageTitle: string = 'Medications';
    pageDescription: string = 'Medications functionality will be implemented in a future release.';
}
