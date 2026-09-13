import { Injectable } from '@angular/core';import { CATALOG_MEDICATIONS } from '../data/medications.mock-data';import { CatalogMedication } from '../models/catalog-medication.model';
@Injectable({providedIn:'root'})export class MedicationsService{getMedications():CatalogMedication[]{return CATALOG_MEDICATIONS.map(item=>({...item}))}}
