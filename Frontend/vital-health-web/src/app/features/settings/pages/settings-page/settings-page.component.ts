import { Component } from "@angular/core";

@Component({
    selector: 'settings-page',
    imports: [],
    templateUrl: './settings-page.component.html',
    styleUrl: './settings-page.component.scss'
})

export class SettingsPageComponent{
    pageTitle: string = 'Settings';
    pageDescription: string = 'Settings functionality will be implemented in a future release.';
}
