import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DatePipe } from '@angular/common';
import { NormesComponent } from './normes/normes.component';
import { AddNormeComponent } from './add-norme/add-norme.component';
import { NormeDetailsComponent } from './norme-details/norme-details.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AjoutFournisseurComponent } from './fournisseur/ajout-fournisseur/ajout-fournisseur.component';
import {FournisseurService} from "./services/service-fournisseur.service";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateFournisseurComponent } from './components/fournisseur/update-fournisseur/update-fournisseur.component';
import {Fournisseur} from "./models/fournisseur";
import {SearchPipe} from "./pipe/SearchPipe";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    PatientDetailsComponent,
    AddPatientComponent,
    NormesComponent,
    AddNormeComponent,
    NormeDetailsComponent,
    UsersComponent,
    UserDetailsComponent,
    AddUserComponent,
    FournisseurComponent,
    AjoutFournisseurComponent,
    UpdateFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatePipe
    ReactiveFormsModule,
    FormsModule,
    SearchPipe
  ],
  providers: [
    FournisseurService,
    {provide: 'url_fournisseur', useValue: 'http://localhost:8080/api/v1/fournisseur'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private datePipe: DatePipe) {
    
   }
}
