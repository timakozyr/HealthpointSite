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
  rh = '1.5:1';

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
    this.rh = (event.target.innerWidth <= 800) ? '1:1.25' : '1.5 : 1';
  }
  

  constructor(service: DoctorsService) {
    this.doctors = service.getDoctors();
  }
}