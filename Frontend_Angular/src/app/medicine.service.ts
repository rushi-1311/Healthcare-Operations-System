import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/allmedicines"

  getMedicines():Observable<Medicine[]>{

    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  private addUrl = "http://localhost:8080/api/medicine"
  createMedicine(medicine:Medicine):Observable<Medicine>{

   return this.httpClient.post<Medicine>(`${this.addUrl}`,medicine);
  }
  private getUrl = "http://localhost:8080/api/getmedicine"
  getMedicineById(id:number):Observable<Medicine>{

    return this.httpClient.get<Medicine>(`${this.getUrl}/${id}`);
  }
  private updateUrl = "http://localhost:8080/api/updatemed"
  updateMedicine(id:number,medicine:Medicine):Observable<object>{

     return this.httpClient.put<Medicine>(`${this.updateUrl}/${id}`,medicine);
  }
 
  private delUrl =  "http://localhost:8080/api/delmedicine"
  delete(id:number):Observable<object>{

    return this.httpClient.delete(`${this.delUrl}/${id}`);
  }
}
