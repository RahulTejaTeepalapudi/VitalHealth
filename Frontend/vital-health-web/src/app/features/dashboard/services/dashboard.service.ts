import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { DASHBOARD_SUMMARY, INITIAL_CART_ITEMS, POPULAR_MEDICATIONS, RECENT_ORDERS } from "../data/dashboard.mock-data";
import { DashboardSummary } from "../models/dashboard-summary.model";
import { Medication } from "../models/medication.model";
import { RecentOrder } from "../models/recent-order.model";
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly platformId = inject(PLATFORM_ID);

  getSummary(): DashboardSummary {
    return DASHBOARD_SUMMARY;
  }

  getPopularMedications(): Medication[] {
    return POPULAR_MEDICATIONS;
  }

  getRecentOrders(): RecentOrder[] {
    return RECENT_ORDERS;
  }

  getInitialCart(): CartItem[] { return INITIAL_CART_ITEMS; }

  saveDraft(items: CartItem[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('vitalhealth-order-draft', JSON.stringify({ items, savedAt: new Date().toISOString() }));
    }
  }
}
