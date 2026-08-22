import { Component } from "@angular/core";

@Component({
    selector: 'invoices-page',
    imports: [],
    templateUrl: './invoices-page.component.html',
    styleUrl: './invoices-page.component.scss'
})

export class InvoicesPageComponent{
    pageTitle: string = 'Invoices';
    pageDescription: string = 'Invoices functionality will be implemented in a future release.';
}
