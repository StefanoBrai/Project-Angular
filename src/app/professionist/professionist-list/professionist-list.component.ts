import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { ResolvedStaticSymbol } from '@angular/compiler';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ProfessionistService } from '../professionist.service';
import { Professionist } from '../Professionist';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-professionist-list',
  templateUrl: './professionist-list.component.html',
  styleUrls: ['./professionist-list.component.css']
})
export class ProfessionistListComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  //private professionistService : ProfessionistService;
  professionistForm: FormGroup;
  professionist;
  private professionists: Professionist[];
  errorMessage: string;

  constructor(private professionistSevice: ProfessionistService, private fb: FormBuilder) {
    //this.professionistService = professionistSevice;
  }

  insertProfessionist(): void {
    // let professionist: Professionist = {
    //   id: 0,
    //   firstname: "Mario",
    //   lastname: "Bianchi",
    //   profession : "Developer",
    //   birthdate : new Date("20191203"),
    //   address : "Via Roma",
    //   region : "Italy",
    //   postalcode : "16159",
    //   destination : 1,
    //   phone : "321-321345",
    //   mail : "mb@dev.it",
    //   minAvailability : "3 weeks",
    //   maxAvailability : "6"
    // };

    const pro = { ...this.professionist, ...this.professionistForm.value };

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

  updateProfessionist(id: string): void {
    this.professionistSevice.updateProfessionist(id)
    .subscribe( p => {
      console.log("aggiornato");
      this.loadProfessionist();
    })
  }

  ngOnInit() {
    this.loadProfessionist();
    this.professionistForm = this.fb.group({
      firstname : '',
      lastname : '',
      profession : '',
      birthdate : '',
      address : '',
      region : '',
      postalcode : '',
      destination : '',
      phone : '',
      mail : '',
      minAvailability : '',
      maxAvailability : ''
    });
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
