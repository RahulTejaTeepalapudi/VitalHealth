import { CurrencyPipe } from '@angular/common';import { Component,computed,inject,signal } from "@angular/core";import { FormsModule } from '@angular/forms';import { RouterLink } from '@angular/router';import { MedicationsService } from '../../services/medications.service';

@Component({
    selector: 'medications-page',
    imports: [CurrencyPipe,FormsModule,RouterLink],
    templateUrl: './medications-page.component.html',
    styleUrl: './medications-page.component.scss'
})

export class MedicationsPageComponent{private readonly service=inject(MedicationsService);readonly medications=this.service.getMedications();readonly search=signal('');readonly category=signal('');readonly dosageForm=signal('');readonly sort=signal('name');readonly cartCount=signal(2);readonly filtered=computed(()=>{const term=this.search().trim().toLowerCase();const items=this.medications.filter(item=>(!term||`${item.name} ${item.strength}`.toLowerCase().includes(term))&&(!this.category()||item.category===this.category())&&(!this.dosageForm()||item.dosageForm===this.dosageForm()));return [...items].sort((a,b)=>this.sort()==='price-low'?a.price-b.price:this.sort()==='price-high'?b.price-a.price:a.name.localeCompare(b.name))});clearFilters(){this.search.set('');this.category.set('');this.dosageForm.set('')}addToCart(){this.cartCount.update(count=>count+1)}}
