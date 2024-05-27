import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent implements OnInit {

  constructor(private patientService:PatientService ,private router:Router, private docauth : DocauthService) { }
  patients:Patient[]=[];
  getPatients(){
  
    this.patientService.getPatientList().subscribe(data=>{

      this.patients=data;
    })
  }
  ngOnInit(): void {
    this.getPatients();
  }
  update(id:number){
    this.router.navigate(['updpatient',id]);
  }
  delete(id:number){

    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  view(id:number){
    this.router.navigate(['viewpatient',id]);
  }
 
logout(){

  this.docauth.logout();
  this.router.navigate(['home'])
}
  
}
