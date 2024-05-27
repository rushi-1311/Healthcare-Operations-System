import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-viewmedicine',
  templateUrl: './viewmedicine.component.html',
  styleUrls: ['./viewmedicine.component.css']
})
export class ViewmedicineComponent implements OnInit {

  medicines:Medicine[]=[];
constructor(private medicineService:MedicineService, private adminauthService:AdminauthService,private router:Router){}
  ngOnInit(): void {
    this.getMedicines();
  }
getMedicines(){
  this.medicineService.getMedicines().subscribe(data=>{this.medicines =  data})

}
 delete(id:number){

  this.medicineService.delete(id).subscribe(data=>{

    console.log(data);
    this.getMedicines();
  })
 }
  
 logout(){

  this.adminauthService.logout();
  this.router.navigate(['home'])
    
 }
}
