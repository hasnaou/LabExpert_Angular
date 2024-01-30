import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})


export class PatientDetailsComponent implements OnInit{

  view!: boolean;

  @Input() currentPatient: Patient = {
    adresse: '',
    datenaissance: new Date(),
    nom: '',
    prenom: '',
    sexe: '',
    tel: ''
  };

  message = '';

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPatient(this.route.snapshot.params["id"]);
    this.route.queryParams.subscribe((queryParams) => {
      this.view = queryParams['view'] === 'true';
      console.log(this.view);
    });
  }

  getPatient(id: string): void{
    this.patientService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPatient = data;
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
          this.message = res.message ? res.message : 'Le statut a été mis à jour avec succès !'
        },
        error: (e) => console.error(e)
      });
  }

}
