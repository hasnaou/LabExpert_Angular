import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { NormesComponent } from './normes/normes.component';
import { NormeDetailsComponent } from './norme-details/norme-details.component';
import { AddNormeComponent } from './add-norme/add-norme.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PatientsComponent } from './components/patients/patients.component';
import {FournisseurComponent} from "./components/fournisseur/fournisseur.component";
import {AjoutFournisseurComponent} from "./components/fournisseur/ajout-fournisseur/ajout-fournisseur.component";
import {UpdateFournisseurComponent} from "./components/fournisseur/update-fournisseur/update-fournisseur.component";
import {EchantillonComponent} from "./components/echantillon/echantillon.component";
import {AjoutEchantillonComponent} from "./components/echantillon/ajout-echantillon/ajout-echantillon.component";

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
  {path: "addfournisseur", component: AjoutFournisseurComponent},
  {path: "updatefournisseur/:id", component: UpdateFournisseurComponent},
  {path: "echantillons", component: EchantillonComponent},
  {path: "addechantillon", component: AjoutEchantillonComponent},
  {
    path: "Reactif",
    component: ReactifsComponent
  },
  {
    path: "AddReactif",
    component: AddReactifComponent
  },
  {
    path: "Outil",
    component: OutilsComponent
  },
  {
    path: "AddOutil",
    component: AddOutilComponent
  },
  {
    path: "Utilisateur",
    component: UtilisateursComponent
  },
  {
    path: "AddUtilisateur",
    component: AddUtilisateurComponent
  },
  {
    path: "UpdateUtilisateur/id",
    component: UpdateUtilisateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
