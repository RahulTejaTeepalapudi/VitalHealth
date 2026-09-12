import { computed, Injectable, signal } from '@angular/core';
import { CardDetails, CheckoutItem, DeliveryMethod, PaymentMethod, ShippingAddress } from '../models/checkout.model';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  readonly items = signal<CheckoutItem[]>([
    { id: 'MED-001', name: 'Testosterone Cypionate', strength: '200 mg/mL', packageSize: '10 mL Vial', price: 45, quantity: 1, imageUrl: '/images/medications/testosterone-cypionate.png' },
    { id: 'MED-003', name: 'HCG Injection', strength: '5000 IU', packageSize: 'Vial', price: 75, quantity: 1, imageUrl: '/images/medications/hcg.png' }
  ]);
  readonly addresses: ShippingAddress[] = [
    { id: 'practice', label: 'Carter Family Care', lines: ['1234 Medical Center Dr', 'Austin, TX 78701', 'United States'] },
    { id: 'westlake', label: 'Office - Westlake', lines: ['5678 Health Pkwy', 'Austin, TX 78746', 'United States'] }
  ];
  readonly selectedAddressId = signal('practice');
  readonly deliveryMethod = signal<DeliveryMethod>('standard');
  readonly paymentMethod = signal<PaymentMethod>('card');
  readonly card = signal<CardDetails>({ cardholderName: 'Dr. James Carter', cardNumber: '1234 5678 9012 3456', expiry: '12/28', securityCode: '123', saveCard: true });
  readonly subtotal = computed(() => this.items().reduce((total, item) => total + item.price * item.quantity, 0));
  readonly shipping = computed(() => this.deliveryMethod() === 'expedited' ? 15 : 0);
  readonly total = computed(() => this.subtotal() + this.shipping());
  readonly selectedAddress = computed(() => this.addresses.find(address => address.id === this.selectedAddressId()) ?? this.addresses[0]);
  updateQuantity(id: string, delta: number): void { this.items.update(items => items.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)); }
  removeItem(id: string): void { this.items.update(items => items.filter(item => item.id !== id)); }
  clear(): void { this.items.set([]); }
}
