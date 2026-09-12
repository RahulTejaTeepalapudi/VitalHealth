export interface CheckoutItem { id: string; name: string; strength: string; packageSize: string; price: number; quantity: number; imageUrl: string; }
export interface ShippingAddress { id: string; label: string; lines: string[]; }
export type DeliveryMethod = 'standard' | 'expedited';
export type PaymentMethod = 'card' | 'ach' | 'hsa' | 'paypal' | 'apple-pay' | 'google-pay';
export interface CardDetails { cardholderName: string; cardNumber: string; expiry: string; securityCode: string; saveCard: boolean; }
