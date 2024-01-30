import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient.model';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{

  patients?: Patient[];
  currentPatient: Patient = {};
  currentIndex = -1;
  nom = '';

  constructor(private patientService: PatientService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrievePatients();
  }
  
  retrievePatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
          this.patients = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  deletePatient(id: string): void {
    this.patientService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/patients']);
        },
        error: (e) => console.error(e)
      })
  }

}
