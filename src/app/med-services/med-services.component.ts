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
  rh = '3:1';

  lgScreen = 1500;
  mdScreen = 700;

  resize(targetWidth) {
    if (targetWidth > this.lgScreen) {
      this.breakpoint = 3;
      this.rh = '2 : 1';
    } else if (targetWidth <= this.lgScreen && targetWidth > this.mdScreen) {
      this.breakpoint = 2;
      this.rh = '1.25 : 1';
    } else {
      this.breakpoint = 1;
      this.rh = '1 : 0.75';
    }
  }

  ngOnInit() {
    this.resize(window.innerWidth);
  }
  
  onResize(event) {
    this.resize(event.target.innerWidth);
  }

  constructor(medService: MedservicesService) {
    this.medService = medService;
    this.allServices = this.medService.getAllServices();
  }

  filterByCategory = (category: string) => this.medService.filterByCategory(category);
}