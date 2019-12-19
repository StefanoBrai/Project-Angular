import { Component, OnInit } from '@angular/core';
import { ProfessionistService } from '../professionist.service';
import { Professionist } from '../Professionist';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-professionist-crud',
  templateUrl: './professionist-crud.component.html',
  styleUrls: ['./professionist-crud.component.css']
})
export class ProfessionistCrudComponent implements OnInit {

  professionist: Professionist;
  private professionists: Professionist[];
  errorMessage: string;

  constructor(private professionistSevice: ProfessionistService) {
  }

  insertProfessionist(pro: Professionist): void {
    this.professionistSevice.insertProfessionist(pro)
      .subscribe(
        p => {
          console.log(p);
          this.loadProfessionist();
        });
  }

  deleteProfessionist(id: string): void {
    this.professionistSevice.deleteProfessionist(id)
      .subscribe(b => {
        console.log(typeof b);
        this.loadProfessionist();
      });
  }

  selectProfessionist(professionist: Professionist) {
    this.professionist = professionist;
  }

  upsertProfessionist(pro: Professionist): void {
    console.log("upserting professionist");
    if (this.professionist && this.professionist.id) {
      this.updateProfessionist(pro);
    } else {
      this.insertProfessionist(pro);
    }
  }
  updateProfessionist(pro: Professionist): void {
    this.professionistSevice.updateProfessionist(pro)
      .subscribe(p => {
        console.log("aggiornato");
        this.loadProfessionist();
        this.professionist = null;
      })
  }


  cancel() : void {
      this.professionist = null;
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
