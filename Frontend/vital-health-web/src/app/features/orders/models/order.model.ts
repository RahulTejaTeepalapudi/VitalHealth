export type OrderStatus='Processing'|'In Transit'|'Delivered'|'Cancelled';
export interface OrderLine{productId:string;name:string;strength:string;packageSize:string;price:number;quantity:number;imageUrl:string}
export interface Order{ id:string;orderNumber:string;date:string;time:string;status:OrderStatus;tracking?:string;items:OrderLine[];shipping:number;tax:number;address:{name:string;lines:string[]};paymentLastFour:string;invoiceNumber:string; }
