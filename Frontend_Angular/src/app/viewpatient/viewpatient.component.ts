import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

  id:number=0;
    patient:Patient=new Patient();
     constructor(private patientService:PatientService,private route:ActivatedRoute){

     }

     ngOnInit():void{
        
        this.id=this.route.snapshot.params['id'];
        this.patientService.getPatientById(this.id).subscribe(data=>{

          this.patient=data;
        })
     }

}
