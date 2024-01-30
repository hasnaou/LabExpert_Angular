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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    ReactifsComponent,
    AddReactifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [
    ReactifService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
