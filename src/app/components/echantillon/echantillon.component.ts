import { Component, OnInit } from '@angular/core';
import {Echantillon} from "../../models/echantillon";
import {EchantillonService} from "../../services/echantillon.service";

@Component({
  selector: 'app-echantillon',
  templateUrl: './echantillon.component.html',
  styleUrls: ['./echantillon.component.css']
})
export class EchantillonComponent implements OnInit {

  echantillons!:any;
  constructor(private echantillonService:EchantillonService) { }

  ngOnInit(): void {
    this.echantillonService.getEchantillons().subscribe(
      data=>{this.echantillons=data;},
      error => {
        console.log(error);}
    );
  }

}
