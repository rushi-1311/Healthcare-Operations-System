import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-updatemedicine',
  templateUrl: './updatemedicine.component.html',
  styleUrls: ['./updatemedicine.component.css']
})
export class UpdatemedicineComponent implements OnInit {

  medicine:Medicine=new Medicine();
  id:number=0;
  constructor(private route:ActivatedRoute,private medicineService:MedicineService,private roter:Router){}

   ngOnInit():void{
      
      this.id=this.route.snapshot.params['id'];
      this.medicineService.getMedicineById(this.id).subscribe(data=>{
       this.medicine=data;
      })
   }

   onSubmit(){

     this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
       console.log(data);
       this.goToMedicineList();
     })
       
   }

   goToMedicineList(){

       this.roter.navigate(['viewmedicine'])
   }

}
