import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { ReactifsComponent } from './components/reactifs/reactifs.component';
import { AddReactifComponent } from './components/reactifs/add-reactif/add-reactif.component';
import {ReactifService} from "./services/reactif.service";
import {OutilService} from "./services/outil.service";
import { OutilsComponent } from './components/outils/outils.component';
import { AddOutilComponent } from './components/outils/add-outil/add-outil.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { AddUtilisateurComponent } from './components/utilisateurs/add-utilisateur/add-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    ReactifsComponent,
    AddReactifComponent,
    OutilsComponent,
    AddOutilComponent,
    UtilisateursComponent,
    AddUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ReactifService,
    OutilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
