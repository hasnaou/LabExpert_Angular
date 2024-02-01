import { Component, OnInit } from '@angular/core';
import {EchantillonService} from "../../services/echantillon.service";

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.css']
})
export class PlanificationComponent implements OnInit {

  echantillons!:any;
  searchech: '';
  constructor(private echantillonService:EchantillonService) { }

  ngOnInit(): void {
    this.echantillonService.getEchantillons().subscribe(
      data=>{this.echantillons=data;},
      error => {
        console.log(error);}
    );
  }


}
