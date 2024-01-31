import { Component, OnInit } from '@angular/core';
import { NormeService } from '../services/norme.service';
import { Norme } from '../models/norme.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-normes',
  templateUrl: './normes.component.html',
  styleUrls: ['./normes.component.css']
})
export class NormesComponent implements OnInit {

  normes?: Norme[];
  currentNorme: Norme = {};
  currentIndex= -1;

  constructor(private normeService: NormeService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveNormes()
  }

  retrieveNormes(): void {
    this.normeService.getAll()
      .subscribe({
        next: (data) => {
          this.normes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  deleteNorme(id: number): void {
    this.normeService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/normes'])
        },
        error: (e) => console.error(e)
      })
  }

}
