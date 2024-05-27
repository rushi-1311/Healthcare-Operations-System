import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent implements OnInit {

  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService,private router:Router){

  }

  ngOnInit():void{

    this.getMedicine();
  }

    getMedicine(){

        this.medicineService.getMedicines().subscribe(data=>{

          this.medicines=data;

        })
    }

    update(id:number){

      this.router.navigate(['updatemedicine',id])

    
    }

    delete(id:number){

      this.medicineService.delete(id).subscribe(data=>{
        console.log(data);
        this.getMedicine();
      })
    }

}
