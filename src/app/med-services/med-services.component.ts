import { Component } from '@angular/core';
import { MedService } from '../models/med-service';
import { MedservicesService } from '../services/medservices.service';

@Component({
  selector: 'app-med-services',
  templateUrl: './med-services.component.html',
  styleUrls: ['./med-services.component.scss']
})
export class MedServicesComponent {

  allServices: MedService[];
  medService: MedservicesService;
  searchTerm = '';
  breakpoint: number = 3;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
}
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

  constructor(medService: MedservicesService) {
    this.medService = medService;
    this.allServices = this.medService.getAllServices();
  }

  filterByCategory = (category: string) => this.medService.filterByCategory(category);
}