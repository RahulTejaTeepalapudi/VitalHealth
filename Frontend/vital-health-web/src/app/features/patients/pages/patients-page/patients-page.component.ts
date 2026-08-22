import { Component } from "@angular/core";

@Component({
    selector: 'patients-page',
    imports: [],
    templateUrl: './patients-page.component.html',
    styleUrl: './patients-page.component.scss'
})

export class PatientsPageComponent{
    pageTitle: string = 'Patients';
    pageDescription: string = 'Patients functionality will be implemented in a future release.';
}
