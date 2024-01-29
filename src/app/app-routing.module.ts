import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import {FournisseurComponent} from "./fournisseur/fournisseur.component";
import {AjoutFournisseurComponent} from "./fournisseur/ajout-fournisseur/ajout-fournisseur.component";

const routes: Routes = [
  {path: "patients", component: PatientsComponent},
  {path: "fournisseurs", component: FournisseurComponent},
  {path: "addfournisseur", component: AjoutFournisseurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
