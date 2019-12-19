import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { ResolvedStaticSymbol } from '@angular/compiler';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ProfessionistService } from '../professionist.service';
import { Professionist } from '../Professionist';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-professionist-crud',
  templateUrl: './professionist-crud.component.html',
  styleUrls: ['./professionist-crud.component.css']
})
export class ProfessionistCrudComponent implements OnInit {
  
  //private professionistService : ProfessionistService;
  professionistForm: FormGroup;
  professionist: Professionist;
  private professionists: Professionist[];
  errorMessage: string;

  constructor(private professionistSevice: ProfessionistService, private fb: FormBuilder) {
    //this.professionistService = professionistSevice;
  }

  insertProfessionist(): void {
      const pro : Professionist = { ...this.professionistForm.value, ...{id: '0'} };

    this.professionistSevice.insertProfessionist(pro)
      .subscribe(
        p => {
          this.professionistForm.reset();
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

  chooseProfessionist(professionist : Professionist){
      this.professionist = professionist;

     this.professionistForm.patchValue({
      
      firstname : this.professionist.firstname,
      lastname : this.professionist.lastname,
      profession : this.professionist.profession,
      birthdate : this.professionist.birthdate,
      address : this.professionist.address,
      region : this.professionist.region,
      postalcode : this.professionist.postalcode,
      destination :this.professionist.destination,
      phone : this.professionist.phone,
      mail : this.professionist.mail,
      minAvailability : this.professionist.minAvailability,
      maxAvailability : this.professionist.maxAvailability
    });
  }

  upsertProfessionist(): void {
    console.log("upserting professionist");
    if(this.professionist && this.professionist.id){
      this.updateProfessionist();
    }else{
      this.insertProfessionist();
    }
  }
  updateProfessionist(): void {
    let pro = { ...this.professionist, ...this.professionistForm.value};
    this.professionistSevice.updateProfessionist(pro)
    .subscribe( p => {
      console.log("aggiornato");
      this.loadProfessionist();
      this.professionistForm.reset();
      this.professionist = null;
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

  cancel(): void{
    this.professionistForm.reset();
    this.professionist = null;
  }
}
