import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Patient } from '../../../models/patient.model';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})


export class PatientDetailsComponent implements OnInit{

  view!: boolean;

  @Input() currentPatient: Patient = {
    adresse: '',
    dateNaissance: new Date(),
    nom: '',
    prenom: '',
    sexe: '',
    tel: ''
  };

  message = '';

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getPatient(this.route.snapshot.params["id"]);
    this.route.queryParams.subscribe((queryParams) => {
      this.view = queryParams['view'] === 'true';
      console.log(this.view);
    });
  }

  getPatient(id: number): void {
    this.patientService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPatient = data;
          // this.currentPatient.datenaissance = this.datePipe.transform(this.currentPatient.datenaissance, 'yyyy-MM-dd')
          console.log(data)
        },
        error: (e) => console.error(e)
      });
  }

  updatePatient(): void {
    this.patientService.update(this.currentPatient)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Le patient a été mis à jour avec succès !'
        },
        error: (e) => console.error(e)
      });
  }

}
