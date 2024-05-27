import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
patients:Patient[]=[];
constructor(private patientService:PatientService,private adminauthService:AdminauthService,private router:Router){}
  ngOnInit(): void {
    this.getPatients();
  }
getPatients(){
  this.patientService.getPatientList().subscribe(data=>{this.patients =  data})

}
 delete(id:number){

  this.patientService.delete(id).subscribe(data=>{

    console.log(data);
    this.getPatients();
  })
 }
  
 logout(){

  this.adminauthService.logout();
  this.router.navigate(['home'])
    
 }
  

}
