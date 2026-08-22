import { Injectable } from "@angular/core";
import { DASHBOARD_SUMMARY, INITIAL_CART_ITEMS, POPULAR_MEDICATIONS, RECENT_ORDERS } from "../data/dashboard.mock-data";
import { DashboardSummary } from "../models/dashboard-summary.model";
import { Medication } from "../models/medication.model";
import { RecentOrder } from "../models/recent-order.model";
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

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
}
