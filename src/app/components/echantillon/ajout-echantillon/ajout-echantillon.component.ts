import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {EchantillonService} from "../../../services/echantillon.service";
import {Patient} from "../../../models/patient.model";
import {Echantillon} from "../../../models/echantillon";

@Component({
  selector: 'app-ajout-echantillon',
  templateUrl: './ajout-echantillon.component.html',
  styleUrls: ['./ajout-echantillon.component.css']
})
export class AjoutEchantillonComponent implements OnInit {
  patients?: Patient[];
  search= '';
  showddiv=false;
  patient:Patient;
  submitted=false;
  echantillon: Echantillon = {
    idEchantillon:0,
    patient:new Patient(),
    utilisateur:"{id: 69}",
    datePrelevement:'',
    typeAnalyse:'',
    Status:''
  }
  constructor(private patientService:PatientService,private echantillonService:EchantillonService) { }


  ngOnInit(): void {
    this.retrievePatients();
  }
  retrievePatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
          this.patients = data;
        },
        error: (e) => console.error(e)
      })
  }
  showPatient(id:number){
    // @ts-ignore
    this.patient=this.patients[id];
    this.showddiv=true;
  }
  addechantillon(){
        const data={
          idEchantillon: null,
          patient: this.patient,
          utilisateur:{"id": 69},
          datePrelevement: this.echantillon.datePrelevement,
          typeAnalyse: this.echantillon.typeAnalyse,
          Status: "ENATTENTE",
        }
        this.echantillonService.addEchantillon(data).subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    //console.log(data);
  }
}
