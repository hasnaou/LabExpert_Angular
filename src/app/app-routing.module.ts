import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { ReactifsComponent } from './components/reactifs/reactifs.component';
import {AddReactifComponent} from "./components/reactifs/add-reactif/add-reactif.component";
import { OutilsComponent } from './components/outils/outils.component';
import {AddOutilComponent} from "./components/outils/add-outil/add-outil.component";
import {UtilisateursComponent} from "./components/utilisateurs/utilisateurs.component";
import {AddUtilisateurComponent} from "./components/utilisateurs/add-utilisateur/add-utilisateur.component";
import {UpdateUtilisateurComponent} from "./components/utilisateurs/update-utilisateur/update-utilisateur.component";

const routes: Routes = [
  {
    path: "patients",
    component: PatientsComponent
  },
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
