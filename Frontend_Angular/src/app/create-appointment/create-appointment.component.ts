import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
appointment : Appointment=new Appointment();

  onSubmit (){
this.saveAppointment();
  }
  goToAppointment(){
    this.router.navigate(['/appointments'])
  }
  constructor(private appointmentService : AppointmentService , private router : Router) { }
saveAppointment(){
  this.appointmentService.createAppointment(this.appointment).subscribe(data=> console.log(data));
  this.goToAppointment();
}
  ngOnInit(): void {
  }

}
