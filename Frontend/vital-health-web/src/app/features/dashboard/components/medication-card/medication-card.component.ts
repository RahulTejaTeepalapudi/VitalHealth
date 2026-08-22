import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from "@angular/core";
import { Medication } from "../../models/medication.model";

@Component({
    selector: 'medication-card',
    imports: [CurrencyPipe],
    templateUrl: './medication-card.component.html',
    styleUrl: './medication-card.component.scss'
})
export class MedicationCardComponent {

  readonly medication = input.required<Medication>();

  readonly addToCart = output<Medication>();
}
