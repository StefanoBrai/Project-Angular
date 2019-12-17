import { Component, OnInit } from '@angular/core';
import { ResolvedStaticSymbol } from '@angular/compiler';
import { ProfessionistService } from '../professionist.service';
import { Professionist } from '../Professionist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-professionist-list',
  templateUrl: './professionist-list.component.html',
  styleUrls: ['./professionist-list.component.css']
})
export class ProfessionistListComponent implements OnInit {

  //private professionistService : ProfessionistService;
  private professionists: Professionist[];

  constructor(private professionistSevice: ProfessionistService) {
    //this.professionistService = professionistSevice;
  }

  insertProfessionist(): void {
    let professionist: Professionist = {
      id: 0,
      firstname: "Mario",
      lastname: "Bianchi",
      country: "UK"
    };

    this.professionistSevice.insertProfessionist(professionist)
      .subscribe(
        p => {
          console.log(p);
          this.loadProfessionist();
        });
  }

  deleteProfessionist(id: number): void {
    this.professionistSevice.deleteProfessionist(id)
      .subscribe(b => {
        console.log(typeof b);
        this.loadProfessionist();
      });
  }

  updateProfessionist(id: number): void {
    this.professionistSevice.updateProfessionist(id)
    .subscribe( p => {
      console.log("aggiornato");
      this.loadProfessionist();
    })
  }

  ngOnInit() {
    this.loadProfessionist();
  }

  loadProfessionist(): void {
    let obs: Observable<Professionist[]> = this.professionistSevice.getProfessionist();
    obs.subscribe(
      ps => {
        console.log(ps);
        this.professionists = ps;
      }
    );
  }

}
