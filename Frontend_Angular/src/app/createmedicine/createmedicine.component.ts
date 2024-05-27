import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-createmedicine',
  templateUrl: './createmedicine.component.html',
  styleUrls: ['./createmedicine.component.css']
})
export class CreatemedicineComponent  {

  medicine:Medicine=new Medicine();

  constructor(private medicineService:MedicineService,private router:Router){}

  saveMedicine(){

    this.medicineService.createMedicine(this.medicine).subscribe(data=>{

      console.log(this.medicine);
      this.goToViewMedicine();
    })

  }

  onSubmit(){

    this.saveMedicine();
  }

  goToViewMedicine(){
    this.router.navigate(['/viewmedicine'])
  }

  // ngOnInit(): void {
  // }

}
