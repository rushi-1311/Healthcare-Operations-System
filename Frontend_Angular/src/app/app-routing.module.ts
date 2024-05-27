import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AuthguardService } from './authguard.service';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { CreatemedicineComponent } from './createmedicine/createmedicine.component';
import { DocauthguardService } from './docauthguard.service';
import { DocdashComponent } from './docdash/docdash.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { HomeComponent } from './home/home.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';

const routes: Routes = [
  {
    path:'admin' , component : AdminDashboardComponent , canActivate: [AuthguardService ]
  },
  // {
  //   path:'back' , component : AdminDashboardComponent 
  // },
  {
    path:'createappointment' , component : CreateAppointmentComponent , canActivate: [AuthguardService ]
  },
  {
    path: 'appointments' , component: AppointmentComponent , canActivate: [AuthguardService ]
  },
  {
    path: 'home' , component: HomeComponent 
  },
  {
    path: '' , redirectTo: 'home' ,  pathMatch: 'full' 
  },
  {
    path: 'docdash' , component: DocdashComponent , canActivate: [DocauthguardService]
  },
  {
    path: 'createpatient' , component: CreatePatientComponent , canActivate: [DocauthguardService]
  },
  {
    path: 'viewmedicine' , component: MedicinelistComponent , canActivate: [DocauthguardService]
  },
  {
    path: 'updpatient/:id' , component: UpdatepatientComponent , canActivate: [DocauthguardService]
  },
  {
    path: 'viewpatient/:id' , component: ViewpatientComponent , canActivate: [DocauthguardService]
  },
  {
    path: 'updatemedicine/:id' , component: UpdatemedicineComponent , canActivate: [DocauthguardService]
  },
  {
    path: 'createmedicine' , component: CreatemedicineComponent , canActivate: [DocauthguardService]
  },
  {
    path: 'doclogin' , component: DocloginComponent , 
  },
  {
    path: 'adlogin' , component: AdloginComponent , 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
