import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';   
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreatemedicineComponent } from './createmedicine/createmedicine.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewmedicineComponent } from './viewmedicine/viewmedicine.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DocdashComponent,
    CreatePatientComponent,
    MedicinelistComponent,
    CreatemedicineComponent,
    UpdatepatientComponent,
    ViewmedicineComponent,
    ViewpatientComponent,
    UpdatemedicineComponent,
    DocloginComponent,
    AdloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
