import { CurrencyPipe } from '@angular/common';import { Component,computed,inject,signal } from "@angular/core";import { FormsModule } from '@angular/forms';import { ActivatedRoute,RouterLink } from '@angular/router';import { OrderStatus } from '../../models/order.model';import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'orders-page',
    imports: [CurrencyPipe,FormsModule,RouterLink],
    templateUrl: './orders-page.component.html',
    styleUrl: './orders-page.component.scss'
})

export class OrdersPageComponent{readonly service=inject(OrdersService);private readonly route=inject(ActivatedRoute);readonly orders=this.service.getOrders();readonly search=signal('');readonly status=signal<OrderStatus|'All'>(this.initialStatus());readonly filtered=computed(()=>{const term=this.search().toLowerCase();return this.orders.filter(order=>(this.status()==='All'||order.status===this.status())&&(!term||`${order.orderNumber} ${order.tracking??''} ${order.items.map(item=>item.name).join(' ')}`.toLowerCase().includes(term)))});private initialStatus():OrderStatus|'All'{const status=this.route.snapshot.queryParamMap.get('status');return status==='Processing'||status==='In Transit'||status==='Delivered'||status==='Cancelled'?status:'All'}setStatus(status:OrderStatus|'All'){this.status.set(status)}}
