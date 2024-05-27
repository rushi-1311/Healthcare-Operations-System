import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "http://localhost:8080/api/allpatients"
  getPatientList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
  }
  private delUrl = "http://localhost:8080/api/delpatient"
  delete(id:number):Observable<object>{

    return this.httpClient.delete(`${this.delUrl}/${id}`);
   }

   private addUrl = "http://localhost:8080/api/create"
   createPatient(patient : Patient):Observable<Patient>{
   return this.httpClient.post<Patient>(`${this.addUrl}`,patient);
  }
  private getUrl = "http://localhost:8080/api/getpatient"
  getPatientById(id:number):Observable<Patient>{
   
    return this.httpClient.get<Patient>(`${this.getUrl}/${id}`);
}

private updateUrl = "http://localhost:8080/api/updatepat"
updatePatient(id:number,patient:Patient):Observable<object>{

 return this.httpClient.put<Patient>(`${this.updateUrl}/${id}`,patient);

}
}
