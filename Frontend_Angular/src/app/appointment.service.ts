import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "http://localhost:8080/api/allappointments"
  getAllAppointments(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`)

  }
  private addUrl = "http://localhost:8080/api/appointment"
  createAppointment(appointment:Appointment):Observable<Appointment>{

    return this.httpClient.post<Appointment>(`${this.addUrl}`,appointment);
  }
  private delUrl = "http://localhost:8080/api/delappt"
  deleteAppointment(id:number):Observable<object>{

    return this.httpClient.delete(`${this.delUrl}/${id}`);
  }
}
