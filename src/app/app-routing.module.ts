import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { ReactifsComponent } from './components/reactifs/reactifs.component';
import {AddReactifComponent} from "./components/reactifs/add-reactif/add-reactif.component";
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import {AddFournisseurComponent} from "./components/fournisseur/add-fournisseur/add-fournisseur.component";

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
    path: "Fornisseur",
    component: FournisseurComponent
  },
  {
    path: "AddFornisseur",
    component: AddFournisseurComponent
  },
  // {path: "UpdateReactif/:id", component: UpdateFournisseurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
