import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from "@angular/core";
import { DashboardStore } from "../../state/dashboard.store";
import { MedicationCardComponent } from '../../components/medication-card/medication-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [CurrencyPipe, MedicationCardComponent, RouterLink],
  providers: [DashboardStore],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit {
  readonly store = inject(DashboardStore);

  ngOnInit(): void { this.store.load(); }

  statusLabel(status: string): string {
    return status === 'in-transit' ? 'In Transit' : status.charAt(0).toUpperCase() + status.slice(1);
  }
}
