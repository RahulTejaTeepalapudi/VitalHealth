import { DashboardSummary } from "../models/dashboard-summary.model";
import { Medication } from "../models/medication.model";
import { RecentOrder } from '../models/recent-order.model';
import { CartItem } from '../models/cart-item.model';

export const DASHBOARD_SUMMARY: DashboardSummary = {
  openOrders: 2,
  inTransit: 1,
  deliveredLast30Days: 8,
  invoicesDue: 1250
};

export const POPULAR_MEDICATIONS: Medication[] = [
  {
    id: 'MED-001',
    name: 'Testosterone Cypionate',
    strength: '200 mg/mL',
    dosageForm: 'Vial',
    packageSize: '10 mL',
    price: 45,
    imageUrl: '/images/medications/testosterone-cypionate.png'
  },
  { id: 'MED-002', name: 'Testosterone Enanthate', strength: '200 mg/mL', dosageForm: 'Vial', packageSize: '10 mL', price: 45, imageUrl: '/images/medications/testosterone-enanthate.png' },
  { id: 'MED-003', name: 'HCG Injection', strength: '5000 IU', dosageForm: 'Vial', packageSize: '', price: 75, imageUrl: '/images/medications/hcg.png' },
  { id: 'MED-004', name: 'Anastrozole', strength: '1 mg', dosageForm: 'Tablets', packageSize: '30', price: 28, imageUrl: '/images/medications/anastrozole.png' },
  { id: 'MED-005', name: 'Clomiphene Citrate', strength: '50 mg', dosageForm: 'Tablets', packageSize: '30', price: 22, imageUrl: '/images/medications/clomiphene.png' }
];

export const RECENT_ORDERS: RecentOrder[] = [
  { id: '1', orderNumber: 'ORD-10052', orderDate: 'May 15, 2025', itemCount: 2, status: 'in-transit', trackingNumber: '1Z999AA1234567890', total: 90 },
  { id: '2', orderNumber: 'ORD-10051', orderDate: 'May 12, 2025', itemCount: 1, status: 'processing', total: 45 },
  { id: '3', orderNumber: 'ORD-10050', orderDate: 'May 09, 2025', itemCount: 3, status: 'delivered', trackingNumber: '1Z999AA1234567888', total: 135 },
  { id: '4', orderNumber: 'ORD-10049', orderDate: 'May 05, 2025', itemCount: 2, status: 'delivered', trackingNumber: '1Z999AA1234567887', total: 88 }
];

export const INITIAL_CART_ITEMS: CartItem[] = [
  { medicationId: 'MED-001', name: 'Testosterone Cypionate', strength: '200 mg/mL', packageSize: '10 mL Vial', quantity: 1, unitPrice: 45, imageUrl: '/images/medications/testosterone-cypionate.png' },
  { medicationId: 'MED-003', name: 'HCG Injection', strength: '5000 IU', packageSize: 'Vial', quantity: 1, unitPrice: 75, imageUrl: '/images/medications/hcg.png' }
];
