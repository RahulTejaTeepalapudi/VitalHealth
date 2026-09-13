import { computed, inject, Injectable, signal } from "@angular/core";
import { DashboardService } from "../services/dashboard.service";
import { DashboardSummary } from "../models/dashboard-summary.model";
import { Medication } from "../models/medication.model";
import { RecentOrder } from "../models/recent-order.model";
import { CartItem } from "../models/cart-item.model";

@Injectable()
export class DashboardStore {

  private readonly dashboardService = inject(DashboardService);

  readonly summary = signal<DashboardSummary | null>(null);

  readonly medications = signal<Medication[]>([]);

  readonly recentOrders = signal<RecentOrder[]>([]);

  readonly cartItems = signal<CartItem[]>([]);

  readonly loading = signal(false);
  readonly draftMessage = signal('');

  readonly cartCount = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  readonly cartSubtotal = computed(() =>
    this.cartItems().reduce(
      (total, item) =>
        total + (item.unitPrice * item.quantity),
      0
    )
  );

  readonly cartTotal = this.cartSubtotal;

  load(): void {
    this.summary.set(
      this.dashboardService.getSummary()
    );

    this.medications.set(
      this.dashboardService.getPopularMedications()
    );

    this.recentOrders.set(
      this.dashboardService.getRecentOrders()
    );
    this.cartItems.set(this.dashboardService.getInitialCart());
  }

  addToCart(medication: Medication): void {
    this.cartItems.update(items => {
      const existing = items.find(item => item.medicationId === medication.id);
      if (existing) return items.map(item => item.medicationId === medication.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...items, { medicationId: medication.id, name: medication.name, strength: medication.strength, packageSize: [medication.packageSize, medication.dosageForm].filter(Boolean).join(' '), quantity: 1, unitPrice: medication.price, imageUrl: medication.imageUrl }];
    });
  }

  removeFromCart(medicationId: string): void {
    this.cartItems.update(items => items.filter(item => item.medicationId !== medicationId));
  }

  clearCart(): void { this.cartItems.set([]); }

  saveDraft(): void {
    if (!this.cartItems().length) {
      this.draftMessage.set('Add an item before saving a draft.');
      return;
    }
    this.dashboardService.saveDraft(this.cartItems());
    this.draftMessage.set('Order draft saved successfully.');
  }
}
