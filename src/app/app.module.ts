import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NormesComponent } from './normes/normes.component';
import { AddNormeComponent } from './add-norme/add-norme.component';
import { NormeDetailsComponent } from './norme-details/norme-details.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { AjoutFournisseurComponent } from './components/fournisseur/ajout-fournisseur/ajout-fournisseur.component';
import { FournisseurService } from "./services/service-fournisseur.service";
import { UpdateFournisseurComponent } from './components/fournisseur/update-fournisseur/update-fournisseur.component';
import { SearchPipe } from "./pipe/SearchPipe";
import { EchantillonComponent } from './components/echantillon/echantillon.component';
import { EchantillonService} from "./services/echantillon.service";
import { AjoutEchantillonComponent } from './components/echantillon/ajout-echantillon/ajout-echantillon.component';
import { SearchPatientPipe } from './pipe/search-patient.pipe';

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
    UpdateFournisseurComponent,
    EchantillonComponent,
    AjoutEchantillonComponent,
    SearchPatientPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    ReactiveFormsModule,
    FormsModule,
    SearchPipe,
    FormsModule,
    SearchPipe,
    FournisseurService,
    EchantillonService,
    {provide: 'url_fournisseur', useValue: 'http://localhost:8080/api/v1/fournisseur'},
    {provide: 'url_echantillon', useValue: 'http://localhost:8080/api/v1/echantillon'}

  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private datePipe: DatePipe) {
  }
}

