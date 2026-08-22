import { Component } from "@angular/core";

@Component({
    selector: 'orders-page',
    imports: [],
    templateUrl: './orders-page.component.html',
    styleUrl: './orders-page.component.scss'
})

export class OrdersPageComponent{
    pageTitle: string = 'Orders';
    pageDescription: string = 'Orders functionality will be implemented in a future release.';
}
