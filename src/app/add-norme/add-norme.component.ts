import { Component, OnInit } from '@angular/core';
import { Norme } from '../models/norme.model';
import { NormeService } from '../services/norme.service';

@Component({
  selector: 'app-add-norme',
  templateUrl: './add-norme.component.html',
  styleUrls: ['./add-norme.component.css']
})
export class AddNormeComponent implements OnInit {

  norme: Norme = {
    libelle: '',
    maxValue: 0,
    minValue: 0,
    unite: ''
  }

  submitted = false;

  constructor(private normeService: NormeService) { }

  ngOnInit(): void {
  }

  saveNorme(): void {
    const data = {
      libelle: this.norme.libelle,
      maxvalue: this.norme.maxValue,
      minvalue: this.norme.minValue,
      unite: this.norme.unite
    }

    this.normeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      })
  }

}
