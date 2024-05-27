import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {

  public id: number = 0;
  // public name: string = "";
  // public age: string = "";
  // public blood: string = "";
  // public prescription: string = "";
  // public dose: string = "";
  // public fees: string = "";
  // public emergency: string = "";
  
  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router){}
   
  patient:Patient=new Patient();

    ngOnInit():void{

      this.id=this.route.snapshot.params['id'];
      this.patientService.getPatientById(this.id).subscribe(data=>{

        this.patient=data;
      })

    }

   onSubmit(){
    
    this.patientService.updatePatient(this.id,this.patient).subscribe(data=>{

      console.log(data);
      this.goToDocDash();

    })
        
   }

   goToDocDash(){

    this.router.navigate(['docdash'])
   }


}
