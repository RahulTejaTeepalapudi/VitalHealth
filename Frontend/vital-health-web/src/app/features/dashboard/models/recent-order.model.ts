export type OrderStatus =
  | 'processing'
  | 'in-transit'
  | 'delivered'
  | 'cancelled';

export interface RecentOrder {
  id: string;
  orderNumber: string;
  orderDate: string;
  itemCount: number;
  status: OrderStatus;
  trackingNumber?: string;
  total: number;
}