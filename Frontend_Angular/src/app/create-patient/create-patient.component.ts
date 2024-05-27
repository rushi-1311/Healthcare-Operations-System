import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient:Patient=new Patient();

  constructor(private patientService:PatientService,private router:Router){

  }
  savepatient(){

    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();
    })

  }


  onSubmit(){

    this.savepatient();
  }

  goToPatientList(){

    this.router.navigate(['/docdash'])
  }
  ngOnInit(): void {
  }

}
