import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { NormesComponent } from './normes/normes.component';
import { NormeDetailsComponent } from './norme-details/norme-details.component';
import { AddNormeComponent } from './add-norme/add-norme.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {FournisseurComponent} from "./fournisseur/fournisseur.component";
import {AjoutFournisseurComponent} from "./fournisseur/ajout-fournisseur/ajout-fournisseur.component";

const routes: Routes = [
  {path: "patients", component: PatientsComponent},
  {path: "patient-details/:id", component: PatientDetailsComponent},
  {path: "add-patient", component: AddPatientComponent},
  {path: "normes", component: NormesComponent},
  {path: "norme-details/:id", component: NormeDetailsComponent},
  {path: "add-norme", component: AddNormeComponent},
  {path: "users", component: UsersComponent},
  {path: "add-user", component: AddUserComponent},
  {path: "user-details/:id", component: UserDetailsComponent},
  {path: "fournisseurs", component: FournisseurComponent},
  {path: "addfournisseur", component: AjoutFournisseurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
