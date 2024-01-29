import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { ReactifsComponent } from './components/reactifs/reactifs.component';

const routes: Routes = [
  {
    path: "patients",
    component: PatientsComponent
  },
  {
    path: "reactifs",
    component: ReactifsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
