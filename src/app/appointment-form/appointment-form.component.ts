import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { DoctorsService } from '../services/doctors.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent {
  doctors: string[];
  appointment: Appointment;

  constructor(
    public dialogRef: MatDialogRef<AppointmentFormComponent>,
    service: DoctorsService)
  {
    this.doctors = service.getDoctors().map(dc => dc.Specialization);
    this.appointment = new Appointment;
  }

  ngOnInit(): void {
    this.appointment = new Appointment;
  }

  onSubmit(): void {
    this.dialogRef.close();
  }
}
