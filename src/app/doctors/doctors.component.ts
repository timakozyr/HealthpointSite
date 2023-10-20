import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  searchTerm = '';
  public doctors: Doctor[];
  breakpoint: number = 3;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
  

  constructor(service: DoctorsService) {
    this.doctors = service.getDoctors();
  }
}